/**
 * ============================================================
 *  Dr. Patle — Appointment Booking Backend (Google Apps Script)
 * ============================================================
 *
 *  What this does, in one line:
 *  Receives booking requests from the website and saves them,
 *  one per row, into the "Appointments" tab of this spreadsheet.
 *
 *  Security layers (each one explained where it happens below):
 *   1. Honeypot        — invisible form field; bots fill it, humans can't see it
 *   2. Shared token    — requests without the site's token are rejected
 *   3. Validation      — every field checked: length, format, allowed values
 *   4. Formula guard   — values can never execute as spreadsheet formulas
 *   5. Duplicate guard — same mobile number can't book twice in 10 minutes
 *   6. Daily cap       — max 150 requests/day, so the sheet can't be flooded
 *   7. Lock            — two simultaneous requests can't corrupt the sheet
 *
 *  Nothing here can touch anything outside THIS spreadsheet.
 */

// ------------------------- SETTINGS -------------------------

var CONFIG = {
  // Must match BOOKING_TOKEN on the website (src/lib/constants.ts)
  SHARED_TOKEN: "phc-adhartal-4172",

  // Name of the tab where bookings are stored (auto-created)
  SHEET_NAME: "Appointments",

  // Get an email for every new booking.
  // "me" = the Google account that owns this sheet. Leave "" to disable.
  NOTIFY_EMAIL: "me",

  // Anti-abuse limits
  DUPLICATE_WINDOW_SECONDS: 600, // same mobile blocked for 10 min
  MAX_PER_DAY: 150,
};

// ----------------------- MAIN ENTRY -------------------------

/** Handles POST requests from the website's booking form. */
function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // --- Layer 1: honeypot -----------------------------------
    // The website includes an invisible field named "website".
    // Humans never see it, so it must arrive empty. Bots that
    // auto-fill every field give themselves away here.
    if (p.website) {
      return jsonReply({ ok: true }); // pretend success; tell bots nothing
    }

    // --- Layer 2: shared token -------------------------------
    if (p.token !== CONFIG.SHARED_TOKEN) {
      return jsonReply({ ok: false, error: "unauthorized" });
    }

    // --- Layer 3: field validation ---------------------------
    var name = clean(p.name, 80);
    var mobile = String(p.mobile || "").replace(/\D/g, "");
    var date = String(p.date || "");
    var timeSlot = clean(p.timeSlot, 60);
    var problem = clean(p.problem, 500);
    var visitType = String(p.visitType || "");

    if (name.length < 2) return fail("Please enter your name.");
    if (!/^[6-9]\d{9}$/.test(mobile))
      return fail("Please enter a valid 10-digit mobile number.");
    if (!isBookableDate(date))
      return fail("Please pick a date between today and 90 days from now.");
    if (timeSlot.indexOf("Afternoon") === -1 && timeSlot.indexOf("Evening") === -1)
      return fail("Please choose an OPD slot.");
    if (visitType !== "new" && visitType !== "followup")
      return fail("Please choose a visit type.");
    if (problem.length < 3) return fail("Please describe your concern briefly.");

    // --- Layer 5: duplicate guard ----------------------------
    var cache = CacheService.getScriptCache();
    var dupKey = "book_" + mobile;
    if (cache.get(dupKey)) {
      return fail(
        "A request from this mobile number was just received. " +
          "Our team will call you — no need to submit again."
      );
    }

    // --- Layer 6: daily cap ----------------------------------
    var props = PropertiesService.getScriptProperties();
    var todayKey = "count_" + new Date().toDateString();
    var todayCount = Number(props.getProperty(todayKey) || 0);
    if (todayCount >= CONFIG.MAX_PER_DAY) {
      return fail("We are receiving high volumes. Please call the clinic directly.");
    }

    // --- Layer 7: locked write to the sheet ------------------
    var lock = LockService.getScriptLock();
    lock.waitLock(10000); // wait max 10s for our turn
    try {
      var sheet = getOrCreateSheet();
      sheet.appendRow([
        new Date(),          // Received at
        name,                // already formula-guarded by clean()
        "'" + mobile,        // leading ' keeps long numbers as text
        date,
        timeSlot,
        visitType === "new" ? "New Patient" : "Follow-up",
        problem,
        "Pending",           // status column for the clinic team
      ]);
      props.setProperty(todayKey, String(todayCount + 1));
      cache.put(dupKey, "1", CONFIG.DUPLICATE_WINDOW_SECONDS);
    } finally {
      lock.releaseLock();
    }

    // Optional email ping to the clinic
    if (CONFIG.NOTIFY_EMAIL) {
      try {
        MailApp.sendEmail({
          to:
            CONFIG.NOTIFY_EMAIL === "me"
              ? Session.getEffectiveUser().getEmail()
              : CONFIG.NOTIFY_EMAIL,
          subject: "New appointment request — " + name,
          body:
            "Name: " + name +
            "\nMobile: " + mobile +
            "\nDate: " + date +
            "\nSlot: " + timeSlot +
            "\nVisit: " + visitType +
            "\nConcern: " + problem +
            "\n\nOpen the sheet to confirm and update status.",
        });
      } catch (mailErr) {
        // Never fail a booking because the email failed
      }
    }

    return jsonReply({ ok: true });
  } catch (err) {
    return jsonReply({ ok: false, error: "server_error" });
  }
}

/** Friendly response if someone opens the URL in a browser. */
function doGet() {
  return ContentService.createTextOutput(
    "Patle Health Care booking service is running."
  );
}

// ------------------------- HELPERS --------------------------

/**
 * Layer 4: formula guard + trim + length cap.
 * A value starting with = + - or @ could execute as a formula
 * when the sheet is opened. Prefixing an apostrophe makes
 * Google Sheets store it as plain text, always.
 */
function clean(value, maxLen) {
  var v = String(value || "").trim().slice(0, maxLen);
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v;
}

/** Date must be YYYY-MM-DD, today or later, within 90 days. */
function isBookableDate(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  var d = new Date(s + "T00:00:00");
  if (isNaN(d.getTime())) return false;
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var max = new Date(today);
  max.setDate(max.getDate() + 90);
  return d >= today && d <= max;
}

/** Returns the Appointments tab, creating it with headers if needed. */
function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    sheet
      .getRange(1, 1, 1, 8)
      .setValues([[
        "Received At", "Name", "Mobile", "Preferred Date",
        "OPD Slot", "Visit Type", "Concern", "Status",
      ]])
      .setFontWeight("bold")
      .setBackground("#0D9488")
      .setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function fail(message) {
  return jsonReply({ ok: false, error: message });
}

function jsonReply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

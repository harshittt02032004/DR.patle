"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarPlus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Loader2,
  MessageCircle,
  Moon,
  Send,
  Sun,
} from "lucide-react";
import { APPS_SCRIPT_URL, BOOKING_TOKEN, DOCTOR } from "@/lib/constants";

const EASE = [0.23, 1, 0.32, 1] as const;

type FormState = {
  name: string;
  mobile: string;
  date: string;
  timeSlot: string;
  problem: string;
  visitType: "new" | "followup";
};

const INITIAL_STATE: FormState = {
  name: "",
  mobile: "",
  date: "",
  timeSlot: "",
  problem: "",
  visitType: "new",
};

type DayChip = {
  iso: string;
  label: string; // "Today" / "Tomorrow" / "Wed"
  sub: string; // "23 Jul"
  sunday: boolean;
};

const SLOTS = [
  {
    value: `Afternoon OPD (${DOCTOR.opd.afternoon})`,
    label: "Afternoon OPD",
    time: DOCTOR.opd.afternoon,
    icon: Sun,
    // 12:00–16:00 IST expressed in UTC for the calendar link
    utc: ["T063000Z", "T103000Z"],
  },
  {
    value: `Evening OPD (${DOCTOR.opd.evening})`,
    label: "Evening OPD",
    time: DOCTOR.opd.evening,
    icon: Moon,
    utc: ["T133000Z", "T153000Z"],
  },
];

const STEPS = ["When", "Who", "Concern"];

const inputClasses =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-body placeholder:text-faint focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/10";

const labelClasses =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted";

const isoOf = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;

const prettyDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [step, setStep] = useState(0);
  const [days, setDays] = useState<DayChip[]>([]);
  const [showOtherDate, setShowOtherDate] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");
  // what was booked — kept for the success screen after the form resets
  const [booked, setBooked] = useState<FormState | null>(null);
  // honeypot — invisible to humans, bots fill it and get silently dropped
  const [website, setWebsite] = useState("");

  // Build day chips on the client only (avoids SSR/client midnight mismatch)
  useEffect(() => {
    const today = new Date();
    const list: DayChip[] = [];
    for (let i = 0; i < 8; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      list.push({
        iso: isoOf(d),
        label:
          i === 0
            ? "Today"
            : i === 1
              ? "Tomorrow"
              : d.toLocaleDateString("en-IN", { weekday: "short" }),
        sub: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
        sunday: d.getDay() === 0,
      });
    }
    setDays(list);
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const nameOk = form.name.trim().length >= 2;
  const mobileOk = /^[6-9]\d{9}$/.test(form.mobile);
  const whenOk = form.date !== "" && form.timeSlot !== "";
  const concernOk = form.problem.trim().length >= 3;

  const selectedIsSunday =
    form.date && new Date(form.date + "T00:00:00").getDay() === 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step !== 2 || !concernOk) return;

    if (!APPS_SCRIPT_URL) {
      setServerMessage("");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      // URL-encoded body = a CORS "simple request" — no preflight,
      // which is the one shape Apps Script accepts cross-origin.
      const body = new URLSearchParams({
        token: BOOKING_TOKEN,
        name: form.name.trim(),
        mobile: form.mobile,
        date: form.date,
        timeSlot: form.timeSlot,
        visitType: form.visitType,
        problem: form.problem.trim(),
        website, // honeypot, must be empty
      });

      const response = await fetch(APPS_SCRIPT_URL, { method: "POST", body });
      if (!response.ok) throw new Error("Submission failed");

      const result = (await response.json()) as { ok: boolean; error?: string };
      if (!result.ok) {
        // friendly validation messages from the backend (e.g. duplicate)
        if (result.error && result.error.length > 20) {
          setServerMessage(result.error);
        }
        throw new Error(result.error || "Submission rejected");
      }

      setBooked({ ...form, name: form.name.trim() });
      setStatus("success");
      setForm(INITIAL_STATE);
      setStep(0);
    } catch (err) {
      setStatus("error");
    }
  };

  // ---------------- SUCCESS SCREEN ----------------
  if (status === "success" && booked) {
    const slot = SLOTS.find((s) => s.value === booked.timeSlot);
    const compact = booked.date.replace(/-/g, "");
    const calendarUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" +
      encodeURIComponent(`Appointment — ${DOCTOR.name}`) +
      "&dates=" +
      (slot
        ? `${compact}${slot.utc[0]}/${compact}${slot.utc[1]}`
        : `${compact}/${compact}`) +
      "&location=" +
      encodeURIComponent(`${DOCTOR.clinicName}, ${DOCTOR.clinicAddress}`) +
      "&details=" +
      encodeURIComponent(
        "Appointment request placed via website. The clinic will call to confirm."
      );
    const whatsappUrl =
      `https://wa.me/${DOCTOR.whatsappNumber}?text=` +
      encodeURIComponent(
        `Hi, I just requested an appointment through the website.\n` +
          `Name: ${booked.name}\n` +
          `Date: ${prettyDate(booked.date)}\n` +
          `Slot: ${slot ? slot.label : booked.timeSlot}\n` +
          `Please confirm my slot.`
      );

    return (
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-line bg-white p-8 text-center shadow-card md:p-12">
        <span aria-hidden="true" className="accent-line absolute inset-x-0 top-0 h-1" />
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <CheckCircle2 className="h-14 w-14 text-green-600" />
        </motion.div>
        <h3 className="mt-5 font-serif text-2xl font-bold text-heading">
          Appointment Request Received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Our clinic team will call {booked.name.split(" ")[0]} on +91{" "}
          {booked.mobile} to confirm this slot:
        </p>

        <div className="mt-5 w-full max-w-sm rounded-2xl border border-teal-lighter bg-teal-pale p-4 text-left">
          <p className="text-sm font-bold text-heading">
            {prettyDate(booked.date)}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-body">
            {slot &&
              (slot.icon === Sun ? (
                <Sun className="h-4 w-4 text-teal" />
              ) : (
                <Moon className="h-4 w-4 text-teal" />
              ))}
            {slot ? `${slot.label} · ${slot.time}` : booked.timeSlot}
          </p>
          <p className="mt-1 text-xs text-muted">
            {booked.visitType === "new" ? "New Patient" : "Follow-up"} ·{" "}
            {DOCTOR.clinicName}
          </p>
        </div>

        <div className="mt-5 flex w-full max-w-sm flex-col gap-2.5 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Confirm faster on WhatsApp
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-heading transition-all hover:border-teal-lighter hover:text-teal"
          >
            <CalendarPlus className="h-4 w-4" />
            Add to calendar
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setBooked(null);
          }}
          className="mt-5 text-sm font-semibold text-teal hover:underline"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  // ---------------- WIZARD ----------------
  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-card md:p-10"
    >
      <span aria-hidden="true" className="accent-line absolute inset-x-0 top-0 h-1" />

      {/* Honeypot — hidden from humans (and screen readers); bots fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {/* Progress header */}
      <div className="mb-8 flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 flex-col gap-1.5">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(.23,1,.32,1)] ${
                i <= step ? "bg-teal" : "bg-line"
              }`}
            />
            <span
              className={`text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                i === step ? "text-teal" : i < step ? "text-heading" : "text-faint"
              }`}
            >
              {i + 1}. {label}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ---------- STEP 1: WHEN ---------- */}
        {step === 0 && (
          <motion.div
            key="when"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className={labelClasses}>Pick a day</p>
            <div className="grid grid-cols-4 gap-2">
              {days.map((d) => {
                const selected = form.date === d.iso && !showOtherDate;
                return (
                  <button
                    key={d.iso}
                    type="button"
                    disabled={d.sunday}
                    onClick={() => {
                      update("date", d.iso);
                      setShowOtherDate(false);
                    }}
                    className={`rounded-xl border px-2 py-2.5 text-center transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] ${
                      d.sunday
                        ? "cursor-not-allowed border-line bg-mist opacity-50"
                        : selected
                          ? "border-teal bg-teal text-white shadow-hover"
                          : "border-line bg-cream hover:-translate-y-0.5 hover:border-teal-lighter"
                    }`}
                  >
                    <span
                      className={`block text-xs font-bold ${
                        selected ? "text-white" : "text-heading"
                      }`}
                    >
                      {d.label}
                    </span>
                    <span
                      className={`mt-0.5 block text-[11px] ${
                        d.sunday
                          ? "font-semibold text-red-500"
                          : selected
                            ? "text-white/85"
                            : "text-muted"
                      }`}
                    >
                      {d.sunday ? "Closed" : d.sub}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                setShowOtherDate((v) => !v);
                update("date", "");
              }}
              className="mt-3 text-xs font-semibold text-teal hover:underline"
            >
              {showOtherDate ? "← Back to quick dates" : "Need a later date?"}
            </button>
            {showOtherDate && (
              <div className="mt-2">
                <input
                  type="date"
                  aria-label="Preferred date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  min={days[0]?.iso}
                  max={days.length ? isoOf(new Date(Date.now() + 90 * 86400000)) : undefined}
                  className={inputClasses}
                />
                {selectedIsSunday && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    OPD is closed on Sundays — please pick another day.
                  </p>
                )}
              </div>
            )}

            <p className={`${labelClasses} mt-6`}>Pick an OPD slot</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SLOTS.map((s) => {
                const selected = form.timeSlot === s.value;
                const Icon = s.icon;
                return (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => update("timeSlot", s.value)}
                    className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ease-[cubic-bezier(.23,1,.32,1)] ${
                      selected
                        ? "border-teal bg-teal text-white shadow-hover"
                        : "border-line bg-cream hover:-translate-y-0.5 hover:border-teal-lighter"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        selected ? "bg-white/15" : "bg-teal/10"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${selected ? "text-white" : "text-teal"}`}
                      />
                    </span>
                    <span>
                      <span
                        className={`block text-sm font-bold ${
                          selected ? "text-white" : "text-heading"
                        }`}
                      >
                        {s.label}
                      </span>
                      <span
                        className={`block text-xs ${
                          selected ? "text-white/85" : "text-muted"
                        }`}
                      >
                        {s.time}
                      </span>
                    </span>
                    {selected && (
                      <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-white" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex justify-end">
              <button
                type="button"
                disabled={!whenOk || Boolean(selectedIsSunday)}
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ---------- STEP 2: WHO ---------- */}
        {step === 1 && (
          <motion.div
            key="who"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    maxLength={80}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={inputClasses}
                  />
                  {nameOk && (
                    <CheckCircle2 className="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-green-600" />
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="mobile" className={labelClasses}>
                  Mobile Number
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center rounded-l-xl border border-r-0 border-line bg-mist px-3.5 text-sm font-semibold text-heading">
                    +91
                  </span>
                  <input
                    id="mobile"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    title="Please enter a valid 10-digit mobile number"
                    value={form.mobile}
                    onChange={(e) =>
                      update(
                        "mobile",
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="10-digit mobile number"
                    className={`${inputClasses} rounded-l-none`}
                  />
                  {mobileOk && (
                    <CheckCircle2 className="absolute right-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-green-600" />
                  )}
                </div>
                <p className="mt-1.5 text-xs text-faint">
                  The clinic calls this number to confirm your slot.
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-teal"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>
              <button
                type="button"
                disabled={!nameOk || !mobileOk}
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* ---------- STEP 3: CONCERN ---------- */}
        {step === 2 && (
          <motion.div
            key="concern"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className={labelClasses}>Visit Type</p>
            <div className="flex gap-2.5">
              {(
                [
                  ["new", "New Patient"],
                  ["followup", "Follow-up"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => update("visitType", value)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    form.visitType === value
                      ? "border-teal bg-teal text-white shadow-hover"
                      : "border-line bg-cream text-body hover:border-teal-lighter"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-5">
              <label htmlFor="problem" className={labelClasses}>
                Briefly Describe Your Concern
              </label>
              <textarea
                id="problem"
                rows={4}
                maxLength={500}
                value={form.problem}
                onChange={(e) => update("problem", e.target.value)}
                placeholder="e.g. Knee pain for the past 2 weeks, difficulty walking"
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* live summary of what's being booked */}
            {whenOk && (
              <div className="mt-5 rounded-2xl border border-teal-lighter bg-teal-pale px-4 py-3 text-sm text-body">
                <span className="font-bold text-heading">
                  {prettyDate(form.date)}
                </span>{" "}
                ·{" "}
                {SLOTS.find((s) => s.value === form.timeSlot)?.label ??
                  form.timeSlot}{" "}
                · {form.visitType === "new" ? "New Patient" : "Follow-up"}
              </div>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600">
                {serverMessage ||
                  `Something went wrong while submitting your request. Please call us directly at ${DOCTOR.phone}.`}
              </p>
            )}

            <div className="mt-7 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-teal"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </button>
              <motion.button
                type="submit"
                disabled={status === "submitting" || !concernOk}
                whileHover={{ scale: status === "submitting" ? 1 : 1.03 }}
                whileTap={{ scale: status === "submitting" ? 1 : 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white shadow-hover transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Request Appointment
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

import { Phone, MapPin, BadgeCheck } from "lucide-react";
import { DOCTOR, NAV_LINKS, WEEK_DAYS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 text-white">
      <div className="section-container grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-bold">{DOCTOR.name}</p>
          <p className="mt-1 text-sm text-teal-light">{DOCTOR.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/50">
            {DOCTOR.degree}
          </p>
          <p className="text-sm leading-relaxed text-white/50">
            {DOCTOR.fellowship}
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-white/40">
            <BadgeCheck className="h-3.5 w-3.5 text-teal-light" />
            {DOCTOR.registration}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-teal-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Contact
          </p>
          <div className="mt-4 space-y-3">
            <a
              href={`tel:${DOCTOR.phoneRaw}`}
              className="flex items-start gap-2 text-sm text-white/50 transition-colors hover:text-teal-light"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.phone}
            </a>
            <a
              href={`tel:${DOCTOR.landlineRaw}`}
              className="flex items-start gap-2 text-sm text-white/50 transition-colors hover:text-teal-light"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.landline}
            </a>
            <p className="flex items-start gap-2 text-sm text-white/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.clinicName}, {DOCTOR.clinicAddress}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            OPD Days
          </p>
          <div className="mt-4 grid grid-cols-7 gap-1.5">
            {WEEK_DAYS.map((day) => (
              <div
                key={day.label}
                title={day.open ? "Open" : "Closed"}
                className={`flex flex-col items-center rounded-lg px-1 py-2 text-[10px] font-semibold ${
                  day.open
                    ? "bg-teal/15 text-teal-light"
                    : "bg-red-500/15 text-red-400"
                }`}
              >
                {day.label}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">
            {DOCTOR.opd.afternoon}
          </p>
          <p className="text-xs text-white/50">{DOCTOR.opd.evening}</p>
          <p className="mt-1 text-xs font-medium text-red-400/80">
            {DOCTOR.opd.closed}
          </p>
        </div>
      </div>

      <div className="section-container mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {DOCTOR.clinicName}. All rights
          reserved.
        </p>
        <p>Website by Pop Up Local</p>
      </div>
    </footer>
  );
}

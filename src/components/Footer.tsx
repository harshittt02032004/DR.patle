import Link from "next/link";
import { Phone, MapPin, BadgeCheck } from "lucide-react";
import { DOCTOR, NAV_LINKS, SERVICES, WEEK_DAYS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-darkteal-deep pt-16 pb-8 text-white">
      <div className="section-container grid grid-cols-1 gap-10 border-b border-white/5 pb-10 sm:grid-cols-2 md:grid-cols-5">
        <div>
          <p className="font-serif text-lg font-bold text-white">
            {DOCTOR.name}
          </p>
          <p className="mt-1 text-sm text-teal-light">{DOCTOR.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-ondark-muted">
            {DOCTOR.degree}
          </p>
          <p className="text-sm leading-relaxed text-ondark-muted">
            {DOCTOR.fellowship}
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-ondark-muted">
            <BadgeCheck className="h-3.5 w-3.5 text-teal-light" />
            {DOCTOR.registration}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ondark-muted transition-colors hover:text-teal-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-ondark-muted transition-colors hover:text-teal-light"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-ondark-muted transition-colors hover:text-teal-light"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
            Contact
          </p>
          <div className="mt-4 space-y-3">
            <a
              href={`tel:${DOCTOR.phoneRaw}`}
              className="flex items-start gap-2 text-sm text-ondark-muted transition-colors hover:text-teal-light"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.phone}
            </a>
            <a
              href={`tel:${DOCTOR.landlineRaw}`}
              className="flex items-start gap-2 text-sm text-ondark-muted transition-colors hover:text-teal-light"
            >
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.landline}
            </a>
            <p className="flex items-start gap-2 text-sm text-ondark-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.clinicName}, {DOCTOR.clinicAddress}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
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
                    : "bg-red-600/10 text-red-400"
                }`}
              >
                {day.label}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-ondark-muted">
            {DOCTOR.opd.afternoon}
          </p>
          <p className="text-xs text-ondark-muted">{DOCTOR.opd.evening}</p>
          <p className="mt-1 text-xs font-medium text-red-400">
            {DOCTOR.opd.closed}
          </p>
        </div>
      </div>

      <div className="section-container mt-6 flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
        <p className="text-ondark-muted/70">
          &copy; {new Date().getFullYear()} {DOCTOR.clinicName}. All rights
          reserved.
        </p>
        <p className="text-teal-light">Website by Pop Up Local</p>
      </div>
    </footer>
  );
}

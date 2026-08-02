import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/book-appointment" },
];

export default function Footer() {
  const { lat, lng } = DOCTOR.coordinates;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <footer className="bg-darkteal-deep pt-12 pb-6 text-white">
      <div className="section-container grid grid-cols-1 gap-8 border-b border-white/5 pb-8 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block">
            {/* dark navy logo → white via invert for the dark footer */}
            <Image
              src="/images/logo.png"
              alt={`${DOCTOR.name} — ${DOCTOR.title}`}
              width={1268}
              height={286}
              className="h-10 w-auto brightness-0 invert md:h-11"
            />
          </Link>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-ondark-muted">
            <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-teal-light" />
            {DOCTOR.registration}
          </p>
          <p className="mt-2 text-xs text-ondark-muted">
            OPD: {DOCTOR.opd.days} · 12–4 PM &amp; 7–9 PM ·{" "}
            <span className="font-medium text-red-400">{DOCTOR.opd.closed}</span>
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ondark-muted transition-colors hover:text-teal-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
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
              href={`mailto:${DOCTOR.email}`}
              className="flex items-start gap-2 text-sm text-ondark-muted transition-colors hover:text-teal-light"
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-ondark-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {DOCTOR.clinicName}, {DOCTOR.clinicAddress}
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-ondark">
            Find Us
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title={`${DOCTOR.clinicName} location map`}
              src={mapSrc}
              className="h-36 w-full border-0 grayscale-[0.4]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light transition-colors hover:text-white"
          >
            <Navigation className="h-4 w-4" />
            Get Directions
          </a>
        </div>
      </div>

      <div className="section-container mt-6 flex justify-center text-xs">
        <p className="text-ondark-muted/70">
          &copy; {new Date().getFullYear()} {DOCTOR.clinicName}. All rights
          reserved. ·{" "}
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-teal-light"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

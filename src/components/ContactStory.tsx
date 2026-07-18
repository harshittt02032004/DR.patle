"use client";

import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  ScanLine,
} from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const EASE = [0.23, 1, 0.32, 1] as const;

/* Scale Pop reveal: 0.85 → 1, staggered 100ms per card.
   Delay lives on whileInView only, so hover/tap respond instantly. */
function PopCard({
  number,
  delay,
  children,
}: {
  number: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: EASE, delay },
      }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 1.02 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="group relative rounded-2xl border border-line bg-white/90 px-[22px] py-[18px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-[16px] transition-[background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:border-teal/15 hover:bg-white/[0.98] hover:shadow-[0_16px_40px_rgba(13,148,136,0.12)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3.5 top-3 select-none text-[32px] font-black leading-none text-teal/[0.03] transition-colors duration-[400ms] group-hover:text-teal/[0.08]"
      >
        {number}
      </span>
      {children}
    </motion.div>
  );
}

/* Circle icon that floods teal (icon inverts to white) when the card is hovered/tapped */
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/[0.06] text-teal transition-all duration-[400ms] ease-[cubic-bezier(.23,1,.32,1)] group-hover:bg-teal group-hover:text-white group-hover:shadow-[0_4px_12px_rgba(13,148,136,0.2)] group-active:bg-teal group-active:text-white"
    >
      {children}
    </div>
  );
}

export default function ContactStory() {
  const { lat, lng } = DOCTOR.coordinates;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="relative overflow-hidden">
      {/* the map IS the page — everything else floats above it */}
      <iframe
        title={`${DOCTOR.clinicName} location map`}
        src={mapSrc}
        className="absolute inset-0 h-full w-full border-0 grayscale-[0.25]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* readability wash — heavier on the left where the story lives */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream via-cream/75 to-cream/10 lg:via-cream/45 lg:to-transparent"
      />

      <div className="section-container relative py-20 md:py-28">
        <div className="flex w-full max-w-[380px] flex-col gap-3.5 max-md:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: EASE },
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-1.5"
          >
            <span className="inline-block rounded-full bg-teal-mint px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-heading">
              Visit Us
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-heading md:text-4xl">
              Finding us is the easy part
            </h2>
            <p className="mt-3 text-base leading-relaxed text-body">
              That&apos;s the clinic behind this card — right on Main Road,
              Adhartal. Here&apos;s everything you need for the visit.
            </p>
          </motion.div>

          <PopCard number="01" delay={0}>
            <div className="flex gap-4">
              <IconCircle>
                <MapPin className="h-[18px] w-[18px]" />
              </IconCircle>
              <div>
                <p className="mb-1 text-sm font-bold text-heading">
                  {DOCTOR.clinicName}
                </p>
                <p className="text-xs leading-[1.6] text-muted">
                  {DOCTOR.clinicAddress}
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal transition-[gap] duration-300 hover:text-teal-dark group-hover:gap-2"
                >
                  Get Directions <span>→</span>
                </a>
              </div>
            </div>
          </PopCard>

          <PopCard number="02" delay={0.1}>
            <div className="flex gap-4">
              <IconCircle>
                <Clock className="h-[18px] w-[18px]" />
              </IconCircle>
              <div>
                <p className="mb-1 text-sm font-bold text-heading">
                  Come during OPD hours
                </p>
                <p className="text-xs leading-[1.6] text-muted">
                  Afternoon: {DOCTOR.opd.afternoon}
                </p>
                <p className="text-xs leading-[1.6] text-muted">
                  Evening: {DOCTOR.opd.evening}
                </p>
                <p className="text-xs leading-[1.6] text-muted">
                  {DOCTOR.opd.days}
                </p>
                <span className="mt-1 inline-block animate-[subtle-pulse_2s_ease-in-out_infinite] text-[11px] font-bold text-red-600">
                  {DOCTOR.opd.closed}
                </span>
              </div>
            </div>
          </PopCard>

          <PopCard number="03" delay={0.2}>
            <div className="flex gap-4">
              <IconCircle>
                <Phone className="h-[18px] w-[18px]" />
              </IconCircle>
              <div>
                <p className="mb-1 text-sm font-bold text-heading">
                  Rather talk to someone first?
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${DOCTOR.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline"
                  >
                    <Phone className="h-3 w-3" /> {DOCTOR.phone}
                  </a>
                  <a
                    href={`tel:${DOCTOR.landlineRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs leading-[1.6] text-muted hover:text-teal"
                  >
                    <PhoneCall className="h-3 w-3" /> {DOCTOR.landline}{" "}
                    (Landline)
                  </a>
                </div>
                <a
                  href={`https://wa.me/${DOCTOR.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal transition-[gap] duration-300 hover:text-teal-dark group-hover:gap-2"
                >
                  <MessageCircle className="h-3 w-3" /> WhatsApp us{" "}
                  <span>→</span>
                </a>
              </div>
            </div>
          </PopCard>

          <PopCard number="04" delay={0.3}>
            <div className="flex gap-4">
              <IconCircle>
                <ScanLine className="h-[18px] w-[18px]" />
              </IconCircle>
              <div>
                <p className="mb-1 text-sm font-bold text-heading">
                  Once you&apos;re here
                </p>
                <p className="text-xs leading-[1.6] text-muted">
                  {DOCTOR.facilities.join(" and ")} are in-house — most visits
                  finish with a diagnosis and a plan, not a referral slip.
                </p>
              </div>
            </div>
          </PopCard>
        </div>
      </div>
    </section>
  );
}

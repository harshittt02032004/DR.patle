"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, PhoneCall, ScanLine } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { DOCTOR } from "@/lib/constants";

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${DOCTOR.coordinates.lat},${DOCTOR.coordinates.lng}&hl=en&z=15&output=embed`;

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="Visit Us"
          title="Clinic Location & Contact"
          description="Patle Health Care Center is on Main Road, Adhartal, Jabalpur — easy to find and easy to reach."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[18px] border border-line-light shadow-card lg:col-span-2"
          >
            <iframe
              title={`${DOCTOR.clinicName} location map`}
              src={mapSrc}
              width="100%"
              height="100%"
              className="h-[380px] w-full border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5 rounded-2xl border border-line-light bg-cream p-7 shadow-card"
          >
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">
                  {DOCTOR.clinicName}
                </p>
                <p className="mt-1 text-sm text-body">
                  {DOCTOR.clinicAddress}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">OPD Timings</p>
                <p className="mt-1 text-sm text-body">
                  Afternoon: {DOCTOR.opd.afternoon}
                </p>
                <p className="text-sm text-body">
                  Evening: {DOCTOR.opd.evening}
                </p>
                <p className="mt-1 text-xs text-faint">
                  {DOCTOR.opd.days} · {DOCTOR.opd.closed}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Mobile</p>
                <a
                  href={`tel:${DOCTOR.phoneRaw}`}
                  className="mt-1 block text-sm font-medium text-teal hover:underline"
                >
                  {DOCTOR.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Landline</p>
                <a
                  href={`tel:${DOCTOR.landlineRaw}`}
                  className="mt-1 block text-sm font-medium text-teal hover:underline"
                >
                  {DOCTOR.landline}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <ScanLine className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">
                  In-house Facilities
                </p>
                <p className="mt-1 text-sm text-body">
                  {DOCTOR.facilities.join(" · ")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

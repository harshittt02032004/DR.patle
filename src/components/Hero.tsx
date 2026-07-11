"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Star, Clock, BadgeCheck } from "lucide-react";
import ParticleCanvas from "./ui/ParticleCanvas";
import { DOCTOR } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-hero-gradient relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <ParticleCanvas />

      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-teal/5 blur-3xl animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-teal-light/5 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-teal-lighter/5 blur-3xl animate-float"
      />
      {/* orbit ring */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-teal/10 lg:block animate-spin-slow"
      >
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-light/60" />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-teal-mint px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-semibold text-heading">
              Accepting Appointments
            </span>
          </div>

          <h1 className="font-serif text-4xl font-extrabold leading-tight text-heading sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Expert Bone &amp; Joint Care</span>
            <br />
            <span className="text-heading">in Jabalpur</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {DOCTOR.name}, {DOCTOR.title} at {DOCTOR.clinicName}, Adhartal —
            offering joint replacement, fracture &amp; trauma care,
            fellowship-trained rheumatology, and sports medicine, with
            in-house Digital X-Ray and a dedicated Physiotherapy Centre.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {DOCTOR.qualifications.map((q, i) => (
              <motion.span
                key={q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="rounded-full border border-line bg-teal-pale px-3.5 py-1.5 text-xs font-semibold tracking-wide text-heading"
              >
                {q}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-105"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </a>
            <a
              href={`tel:${DOCTOR.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal px-7 py-3.5 text-sm font-semibold text-teal transition-colors hover:bg-teal-pale"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-muted">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                {DOCTOR.rating}/5 ({DOCTOR.reviewCount} reviews)
              </span>
            </div>
            <div className="h-4 w-px bg-line" />
            <span className="flex items-center gap-1.5 text-sm font-medium">
              <BadgeCheck className="h-4 w-4 text-teal" />
              {DOCTOR.registrationShort}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass relative rounded-3xl p-6 shadow-lift">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist">
              <Image
                src={DOCTOR.photo}
                alt={`${DOCTOR.name}, ${DOCTOR.title} at ${DOCTOR.clinicName}, Adhartal, Jabalpur`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-[55%_center]"
              />
            </div>

            <div className="mt-5">
              <h3 className="font-serif text-xl font-bold text-heading">
                {DOCTOR.name}
              </h3>
              <p className="text-sm font-semibold text-teal">
                {DOCTOR.title}
              </p>
              <p className="mt-1 text-xs text-muted">{DOCTOR.degree}</p>
              <p className="text-xs text-muted">{DOCTOR.fellowship}</p>
            </div>

            <div className="mt-5 rounded-2xl border border-line bg-teal-pale p-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal">
                <Clock className="h-3.5 w-3.5" />
                OPD Hours · {DOCTOR.opd.days}
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-body">
                <div>
                  <p className="text-xs text-faint">Afternoon</p>
                  <p className="font-semibold">{DOCTOR.opd.afternoon}</p>
                </div>
                <div>
                  <p className="text-xs text-faint">Evening</p>
                  <p className="font-semibold">{DOCTOR.opd.evening}</p>
                </div>
              </div>
              <p className="mt-2 text-xs font-semibold text-red-600">
                {DOCTOR.opd.closed}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-amber-400/10 bg-[#FFFBEB] p-4">
              <div>
                <p className="text-xs text-faint">Google Rating</p>
                <p className="flex items-center gap-1 font-serif text-lg font-bold text-heading">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {DOCTOR.rating}/5
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-faint">Registration</p>
                <p className="text-sm font-semibold text-teal">
                  {DOCTOR.registrationShort}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

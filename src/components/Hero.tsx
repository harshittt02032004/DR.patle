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

      <div className="section-container relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:items-start">
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
            From a broken bone to long-standing joint pain — get a clear
            diagnosis and an honest treatment plan, at one clinic in Adhartal.
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
          whileHover={{ y: -8, transition: { duration: 0.35 } }}
          whileTap={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass animate-float-soft relative transform-gpu rounded-3xl p-4 shadow-lift transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(13,148,136,0.16)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist">
              <Image
                src={DOCTOR.photo}
                alt={`${DOCTOR.name}, ${DOCTOR.title} at ${DOCTOR.clinicName}, Adhartal, Jabalpur`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-[62%_center]"
              />

              {/* everything the card used to stack below now overlays the photo */}
              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/50 bg-white/80 p-4 backdrop-blur-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold leading-tight text-heading">
                      {DOCTOR.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal">
                      {DOCTOR.title}
                    </p>
                  </div>
                  <p className="flex shrink-0 items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold text-heading">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {DOCTOR.rating}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-line-light pt-3 text-xs font-medium text-body">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-teal" />
                  <span>
                    Mon–Sat · 12–4 &amp; 7–9 PM
                    <span className="text-red-600"> · Sun closed</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

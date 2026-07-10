"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Building2,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { USPS, DOCTOR } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  Award,
  Building2,
  Users,
};

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="About the Doctor"
          title={`Why Patients Choose ${DOCTOR.name}`}
          description="A patient-centered approach to orthopaedic care, backed by qualifications, fellowship training, and complete in-clinic facilities."
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-navy/70 md:text-lg"
        >
          {DOCTOR.bio}
        </motion.p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {USPS.map((usp, i) => {
            const Icon = ICONS[usp.icon] ?? Award;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex gap-5 rounded-2xl border border-navy/5 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-teal-light">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy">
                    {usp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {usp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Bone,
  Stethoscope,
  Zap,
  Shield,
  ScanLine,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/constants";

const ICONS: Record<string, LucideIcon> = {
  Bone,
  Stethoscope,
  Zap,
  Shield,
  ScanLine,
  HeartPulse,
};

type ServiceCardProps = {
  service: Service;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = ICONS[service.icon] ?? Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-lighter hover:shadow-lift"
    >
      <span className="accent-line absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
          <Icon className="h-6 w-6" />
        </div>
        <span className="translate-y-1 rounded-full bg-teal-mint px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-heading opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {service.tag}
        </span>
      </div>

      <h3 className="font-serif text-lg font-bold text-heading">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>
    </motion.div>
  );
}

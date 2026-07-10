"use client";

import SectionHeader from "./ui/SectionHeader";
import ServiceCard from "./ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 md:py-28">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Treat"
          title="Comprehensive Orthopaedic Services"
          description="From joint replacement to arthritis care and rehabilitation — diagnosis, treatment, and recovery under one roof at Patle Health Care Center."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

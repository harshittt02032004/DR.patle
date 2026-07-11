"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import ServiceCard from "./ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-mist py-20 md:py-28">
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

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-teal px-7 py-3.5 text-sm font-semibold text-teal transition-colors hover:bg-teal hover:text-white"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

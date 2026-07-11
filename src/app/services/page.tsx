import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { DOCTOR, SERVICES } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Orthopaedic Services in Jabalpur | ${DOCTOR.clinicName}`,
  description: `Orthopaedic services at ${DOCTOR.clinicName}, Adhartal, Jabalpur — joint replacement, fracture & trauma care, rheumatology & arthritis, sports medicine, digital X-ray, and physiotherapy by ${DOCTOR.name}.`,
  alternates: { canonical: `${SITE_URL}/services` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <PageHero
        title="Comprehensive Orthopaedic Services"
        tagline="From joint replacement to arthritis care and rehabilitation — diagnosis, treatment, and recovery under one roof at Patle Health Care Center."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-mist py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl border border-line bg-white p-10 text-center shadow-card">
            <h2 className="font-serif text-2xl font-bold text-heading md:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Book a consultation and Dr. Patle will evaluate your condition,
              explain the findings, and recommend the right path — whether
              that&apos;s physiotherapy, medical management, or a procedure.
            </p>
            <Link
              href="/book-appointment"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-105"
            >
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

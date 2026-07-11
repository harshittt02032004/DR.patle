import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import BookingForm from "@/components/BookingForm";
import { DOCTOR } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Book Appointment | ${DOCTOR.name}, ${DOCTOR.title} Jabalpur`,
  description: `Book an OPD appointment with ${DOCTOR.name} at ${DOCTOR.clinicName}, Adhartal, Jabalpur. Afternoon OPD ${DOCTOR.opd.afternoon}, Evening OPD ${DOCTOR.opd.evening}, ${DOCTOR.opd.days}.`,
  alternates: { canonical: `${SITE_URL}/book-appointment` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Book Appointment",
      item: `${SITE_URL}/book-appointment`,
    },
  ],
};

export default function BookAppointmentPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <PageHero
        title="Book Your Appointment"
        tagline="Fill in your details and our clinic team will confirm your slot at the earliest available OPD timing."
        crumbs={[{ label: "Home", href: "/" }, { label: "Book Appointment" }]}
      />

      <section className="bg-mist py-16 md:py-24">
        <div className="section-container grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>

          <div className="flex flex-col gap-5 rounded-2xl bg-darkteal p-7 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                OPD Timings
              </p>
              <div className="mt-3 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" />
                <div className="text-sm text-ondark">
                  <p>Afternoon: {DOCTOR.opd.afternoon}</p>
                  <p>Evening: {DOCTOR.opd.evening}</p>
                  <p className="mt-1 text-xs text-ondark-muted">
                    {DOCTOR.opd.days} · {DOCTOR.opd.closed}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                Clinic Address
              </p>
              <div className="mt-3 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" />
                <p className="text-sm text-ondark">
                  {DOCTOR.clinicName}, {DOCTOR.clinicAddress}
                </p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                Prefer to Call?
              </p>
              <a
                href={`tel:${DOCTOR.phoneRaw}`}
                className="mt-3 flex items-center gap-3 text-base font-semibold text-white hover:text-teal-light"
              >
                <Phone className="h-5 w-5 text-teal-light" />
                {DOCTOR.phone}
              </a>
              <a
                href={`tel:${DOCTOR.landlineRaw}`}
                className="mt-2 flex items-center gap-3 text-sm font-medium text-ondark hover:text-teal-light"
              >
                <Phone className="h-4 w-4 text-teal-light" />
                {DOCTOR.landline} (Landline)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

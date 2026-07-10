import { Clock, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { DOCTOR } from "@/lib/constants";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />

      <section id="appointment" className="bg-white py-20 md:py-28">
        <div className="section-container">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Book Your Appointment"
            description="Fill in your details and our clinic team will confirm your slot at the earliest available OPD timing."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            <div className="flex flex-col gap-5 rounded-2xl bg-navy p-7 text-white">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                  OPD Timings
                </p>
                <div className="mt-3 flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" />
                  <div className="text-sm text-white/70">
                    <p>Afternoon: {DOCTOR.opd.afternoon}</p>
                    <p>Evening: {DOCTOR.opd.evening}</p>
                    <p className="mt-1 text-xs text-white/40">
                      {DOCTOR.opd.days} · {DOCTOR.opd.closed}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                  Clinic Address
                </p>
                <div className="mt-3 flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-light" />
                  <p className="text-sm text-white/70">
                    {DOCTOR.clinicName}, {DOCTOR.clinicAddress}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
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
                  className="mt-2 flex items-center gap-3 text-sm font-medium text-white/70 hover:text-teal-light"
                >
                  <Phone className="h-4 w-4 text-teal-light" />
                  {DOCTOR.landline} (Landline)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

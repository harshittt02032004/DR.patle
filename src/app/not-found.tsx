import Link from "next/link";
import { CalendarCheck, Home, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { DOCTOR } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="overflow-x-hidden">
      <section className="bg-hero-gradient flex min-h-[80vh] items-center pt-24">
        <div className="section-container py-16 text-center">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[3px] text-teal">
            Page not found
          </p>
          <h1 className="mt-4 font-serif text-7xl font-extrabold text-heading md:text-8xl">
            4<span className="gradient-text">0</span>4
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-body">
            This page doesn&apos;t exist — maybe the link was mistyped, or the
            page has moved. The clinic, thankfully, is exactly where it always
            is.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-105"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full border-2 border-teal px-7 py-3.5 text-sm font-semibold text-teal transition-colors hover:bg-teal-pale"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>
          <a
            href={`tel:${DOCTOR.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-teal"
          >
            <Phone className="h-3.5 w-3.5" />
            Or call us: {DOCTOR.phone}
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarCheck, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import { DOCTOR } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `About ${DOCTOR.name} | ${DOCTOR.title}, Jabalpur`,
  description: `Learn about ${DOCTOR.name} — ${DOCTOR.degree}, ${DOCTOR.fellowship}. ${DOCTOR.title} at ${DOCTOR.clinicName}, Adhartal, Jabalpur. MP Medical Council Reg. No. 4172.`,
  alternates: { canonical: `${SITE_URL}/about` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <PageHero
        title={`About ${DOCTOR.name}`}
        tagline={`${DOCTOR.degree} · ${DOCTOR.fellowship}`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="section-container grid grid-cols-1 items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="glass relative overflow-hidden rounded-3xl p-5 shadow-lift">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist">
                <Image
                  src={DOCTOR.photo}
                  alt={`${DOCTOR.name}, ${DOCTOR.title} at ${DOCTOR.clinicName}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover object-[55%_center]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="font-serif text-lg font-bold text-heading">
                    {DOCTOR.name}
                  </p>
                  <p className="text-sm font-semibold text-teal">{DOCTOR.title}</p>
                </div>
                <BadgeCheck className="h-6 w-6 text-teal" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[3px] text-teal-light">
              The Doctor
            </span>
            <h2 className="font-serif text-2xl font-bold leading-tight text-heading md:text-3xl">
              Orthopaedic surgery and rheumatology expertise, together in one
              practice
            </h2>
            <p className="mt-5 text-base leading-relaxed text-body">
              {DOCTOR.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-body">
              This combination is uncommon: most patients with joint problems
              have to choose between a surgeon&apos;s perspective and a
              physician&apos;s. At {DOCTOR.clinicName}, both live in the same
              consultation room — which means the recommendation you receive is
              based on what your joint actually needs, not on which specialist
              you happened to see first.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-cream p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-faint">
                  Qualifications
                </p>
                <ul className="mt-2 space-y-1">
                  {DOCTOR.qualifications.map((q) => (
                    <li key={q} className="flex items-center gap-2 text-sm font-medium text-body">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-teal" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-line bg-cream p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-faint">
                    Registration
                  </p>
                  <p className="mt-2 text-sm font-semibold text-heading">
                    {DOCTOR.registration}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Healthcare Professional ID: {DOCTOR.hprId}
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-teal-pale p-5">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal">
                    <Clock className="h-3.5 w-3.5" />
                    OPD · {DOCTOR.opd.days}
                  </p>
                  <p className="mt-2 text-sm font-medium text-body">
                    {DOCTOR.opd.afternoon} · {DOCTOR.opd.evening}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-red-600">
                    {DOCTOR.opd.closed}
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-105"
            >
              <CalendarCheck className="h-5 w-5" />
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

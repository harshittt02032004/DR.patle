import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import { DOCTOR, SERVICES } from "@/lib/constants";
import { SERVICES_CONTENT, getServiceContent } from "@/lib/services-content";
import { SITE_URL } from "@/lib/schema";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceContent(params.slug);
  if (!service) return {};
  return {
    title: `${service.metaTitle} | ${DOCTOR.name}`,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | ${DOCTOR.name}`,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceContent(params.slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${SITE_URL}/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "MedicalWebPage",
        name: service.metaTitle,
        description: service.metaDescription,
        url: `${SITE_URL}/services/${service.slug}`,
        about: {
          "@type": "MedicalSpecialty",
          name: "Orthopedic",
        },
        provider: { "@id": `${SITE_URL}/#physician` },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PageHero
        title={service.title}
        tagline={service.heroTagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="section-container grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {service.overview.map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-body md:text-lg ${
                  i > 0 ? "mt-5" : ""
                }`}
              >
                {para}
              </p>
            ))}

            <h2 className="mt-12 font-serif text-2xl font-bold text-heading md:text-3xl">
              {service.whenToConsultTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {service.whenToConsult.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <span className="text-base leading-relaxed text-body">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-serif text-2xl font-bold text-heading md:text-3xl">
              {service.whatWeOfferTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {service.whatWeOffer.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-cream p-6 transition-all duration-300 hover:border-teal-lighter hover:shadow-lift"
                >
                  <h3 className="font-serif text-base font-bold text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {service.recoveryNote && (
              <div className="mt-10 rounded-2xl border border-line bg-teal-pale p-6">
                <h3 className="font-serif text-lg font-bold text-heading">
                  Recovery &amp; What to Expect
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body md:text-base">
                  {service.recoveryNote}
                </p>
              </div>
            )}

            <h2 className="mt-12 font-serif text-2xl font-bold text-heading md:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-line bg-white shadow-card open:border-teal-lighter"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-heading md:text-base [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-teal transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted md:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl bg-darkteal p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-light">
                Consult {DOCTOR.name.split(" ")[0]}. {DOCTOR.name.split(" ").pop()}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ondark">
                {DOCTOR.degree}
              </p>
              <p className="text-sm leading-relaxed text-ondark">
                {DOCTOR.fellowship}
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-ondark-muted">
                <BadgeCheck className="h-3.5 w-3.5 text-teal-light" />
                {DOCTOR.registration}
              </p>
              <div className="mt-5 border-t border-white/5 pt-5">
                <p className="text-xs uppercase tracking-wide text-ondark-muted">
                  OPD · {DOCTOR.opd.days}
                </p>
                <p className="mt-1 text-sm font-medium text-ondark">
                  {DOCTOR.opd.afternoon}
                </p>
                <p className="text-sm font-medium text-ondark">
                  {DOCTOR.opd.evening}
                </p>
              </div>
              <Link
                href="/book-appointment"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-light"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </Link>
              <a
                href={`tel:${DOCTOR.phoneRaw}`}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                {DOCTOR.phone}
              </a>
            </div>

            <div className="rounded-3xl border border-line bg-cream p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                Other Services
              </p>
              <ul className="mt-4 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-teal-pale hover:text-heading"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

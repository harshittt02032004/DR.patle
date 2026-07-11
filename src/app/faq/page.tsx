import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import { DOCTOR, SERVICES } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${DOCTOR.clinicName}, Jabalpur`,
  description: `Answers to common questions about appointments, OPD timings, digital X-ray, physiotherapy, and consultations at ${DOCTOR.clinicName}, Adhartal, Jabalpur.`,
  alternates: { canonical: `${SITE_URL}/faq` },
};

const FAQS = [
  {
    question: "How do I book an appointment with Dr. Patle?",
    answer: `You can book online through the Book Appointment page on this website — our team will call you back to confirm your slot. You can also call the clinic directly at ${DOCTOR.phone} (mobile) or ${DOCTOR.landline} (landline) during OPD hours.`,
  },
  {
    question: "What are the OPD timings?",
    answer: `OPD runs ${DOCTOR.opd.days}, in two sessions: Afternoon ${DOCTOR.opd.afternoon} and Evening ${DOCTOR.opd.evening}. The clinic is closed on Sunday.`,
  },
  {
    question: "Where is Patle Health Care Center located?",
    answer: `The clinic is at ${DOCTOR.clinicAddress} — on Main Road in Adhartal, easy to reach from anywhere in Jabalpur. The Contact page has a map with directions.`,
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any previous X-rays, MRI/CT scans, and reports related to your problem, a list of medicines you currently take, and details of any past surgeries or medical conditions. If you don't have prior records, don't worry — evaluation can start fresh, and X-rays can be done at the clinic itself.",
  },
  {
    question: "Can I get an X-ray done at the clinic?",
    answer:
      "Yes. The clinic has an in-house digital X-ray facility, so imaging is done during your consultation itself when clinically needed — no separate trips to an imaging centre.",
  },
  {
    question: "Is physiotherapy available at the same clinic?",
    answer:
      "Yes. Patle Health Care Center has a dedicated physiotherapy and rehabilitation centre, used for post-operative recovery, fracture rehabilitation, arthritis exercise programs, and sports injury rehab.",
  },
  {
    question: "Does Dr. Patle treat arthritis as well as injuries?",
    answer:
      "Yes. Dr. Patle is an orthopaedic surgeon with an additional Fellowship in Rheumatology — so your joint problem is seen with both a surgeon's and a physician's eye. Whether the right answer is medication, physiotherapy, or a procedure, the recommendation is based on what the joint needs.",
  },
  {
    question: "Do I need a referral to consult?",
    answer:
      "No referral is needed. You can book directly for any bone, joint, muscle, or arthritis-related problem.",
  },
  {
    question: "What happens after I submit the online booking form?",
    answer:
      "Your request reaches our clinic team immediately. We call you on the mobile number you provided to confirm your appointment slot, usually within clinic hours the same day.",
  },
  {
    question: "What if I need urgent care outside OPD hours?",
    answer:
      "For emergencies such as major injuries, severe deformity after a fall, or uncontrolled pain, please go to the nearest emergency facility immediately. For urgent but non-emergency concerns, call the clinic and our team will guide you to the earliest available slot.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function FAQPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PageHero
        title="Frequently Asked Questions"
        tagline="Answers to the questions patients ask most about appointments, timings, and clinic facilities."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="section-container max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((faq) => (
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

          <div className="mt-12 rounded-3xl border border-line bg-teal-pale p-8 text-center">
            <h2 className="font-serif text-xl font-bold text-heading md:text-2xl">
              Looking for treatment-specific questions?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
              Each service page has its own FAQ section covering that
              treatment in detail:
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-body transition-colors hover:border-teal hover:text-teal"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link
              href="/book-appointment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-105"
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

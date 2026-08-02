import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import ContactStory from "@/components/ContactStory";
import { DOCTOR } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Contact ${DOCTOR.clinicName} | Adhartal, Jabalpur`,
  description: `Contact ${DOCTOR.clinicName}: ${DOCTOR.clinicAddress}. Phone ${DOCTOR.phone}. OPD ${DOCTOR.opd.days}, ${DOCTOR.opd.afternoon} and ${DOCTOR.opd.evening}.`,
  alternates: { canonical: `${SITE_URL}/contact` },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        heading="Contact and Location"
        highlightWords={["Contact", "Location"]}
        subtitle="Visit Patle Health Care Center, Main Road, Adhartal, Jabalpur — or reach us by phone or WhatsApp."
      />
      <ContactStory />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

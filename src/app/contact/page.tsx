import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/Contact";
import { DOCTOR } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Contact ${DOCTOR.clinicName} | Adhartal, Jabalpur`,
  description: `Contact ${DOCTOR.clinicName}: ${DOCTOR.clinicAddress}. Mobile ${DOCTOR.phone}, Landline ${DOCTOR.landline}. OPD ${DOCTOR.opd.days}, ${DOCTOR.opd.afternoon} and ${DOCTOR.opd.evening}.`,
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
      <Navbar />
      <PageHero
        title="Contact & Location"
        tagline={`${DOCTOR.clinicName} is on Main Road, Adhartal, Jabalpur — easy to find and easy to reach.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

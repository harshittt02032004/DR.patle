import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import { DOCTOR } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Privacy Policy | ${DOCTOR.clinicName}`,
  description: `Privacy policy for the ${DOCTOR.clinicName} website — how appointment and contact information submitted through this site is collected, used, and protected.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      "When you request an appointment through this website, we collect the details you provide in the booking form: your name, mobile number, preferred appointment date and OPD slot, a brief description of your concern, and whether you are a new or follow-up patient.",
      "We do not collect payment information, government identification numbers, or detailed medical records through this website.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "The information you submit is used solely to manage your appointment request: our clinic team uses your mobile number to call or message you to confirm, reschedule, or clarify your booking, and your description of the concern helps the doctor prepare for your visit.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "How Your Information Is Stored",
    body: [
      "Appointment requests are stored securely in the clinic's private appointment records, accessible only to authorised clinic staff. Records are retained only as long as needed for clinic administration and applicable legal requirements.",
    ],
  },
  {
    title: "Website Analytics & Cookies",
    body: [
      "This website may use basic, privacy-respecting analytics to understand overall visitor traffic (such as page views). These analytics do not identify you personally. The website does not use advertising or tracking cookies.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "This website embeds Google Maps to show the clinic location, and appointment submissions are processed via Google's infrastructure. These services are governed by Google's own privacy policy. The WhatsApp chat button opens WhatsApp, which is governed by WhatsApp's privacy policy.",
    ],
  },
  {
    title: "Medical Disclaimer",
    body: [
      "Content on this website is provided for general information about the clinic and its services. It is not medical advice and does not replace a consultation. Please consult the doctor in person for diagnosis and treatment of any medical condition. In case of a medical emergency, contact the nearest emergency facility immediately.",
    ],
  },
  {
    title: "Your Rights & Contact",
    body: [
      `To ask about, correct, or request deletion of information you submitted through this website, contact the clinic directly: ${DOCTOR.clinicName}, ${DOCTOR.clinicAddress}. Phone: ${DOCTOR.phone} (mobile) or ${DOCTOR.landline} (landline) during OPD hours.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <PageHero
        title="Privacy Policy"
        tagline="How information submitted through this website is collected, used, and protected."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="section-container max-w-3xl">
          <p className="text-sm text-faint">Last updated: July 2026</p>
          {SECTIONS.map((section) => (
            <div key={section.title} className="mt-10">
              <h2 className="font-serif text-xl font-bold text-heading md:text-2xl">
                {section.title}
              </h2>
              {section.body.map((para, i) => (
                <p key={i} className="mt-3 text-base leading-relaxed text-body">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

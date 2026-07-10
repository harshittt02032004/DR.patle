import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { DOCTOR } from "@/lib/constants";
import { jsonLd, SITE_URL } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${DOCTOR.name} | ${DOCTOR.title} in Adhartal, Jabalpur`,
  description: `${DOCTOR.name}, ${DOCTOR.degree} — ${DOCTOR.title} at ${DOCTOR.clinicName}, Adhartal, Jabalpur. Joint replacement, fracture & trauma care, fellowship-trained rheumatology, sports medicine, with in-house Digital X-Ray and Physiotherapy Centre. Book an appointment today.`,
  keywords: [
    "orthopaedic surgeon Jabalpur",
    "knee replacement Jabalpur",
    "hip replacement Jabalpur",
    "bone specialist Adhartal",
    "fracture doctor Jabalpur",
    "arthritis doctor Jabalpur",
    "rheumatology Jabalpur",
    "sports injury doctor Jabalpur",
    "Dr Sushil Kumar Patle",
    "Patle Health Care Center",
    "physiotherapy Adhartal",
    "digital x-ray Jabalpur",
  ],
  authors: [{ name: DOCTOR.name }],
  openGraph: {
    title: `${DOCTOR.name} | ${DOCTOR.title} in Jabalpur`,
    description: `Expert bone & joint care at ${DOCTOR.clinicName}, Adhartal, Jabalpur. Joint replacement, trauma care, rheumatology & sports medicine.`,
    url: SITE_URL,
    siteName: DOCTOR.clinicName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${DOCTOR.name} | ${DOCTOR.title} in Jabalpur`,
    description: `Expert bone & joint care at ${DOCTOR.clinicName}, Adhartal, Jabalpur.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

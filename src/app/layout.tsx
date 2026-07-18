import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { DOCTOR } from "@/lib/constants";
import { jsonLd, SITE_URL } from "@/lib/schema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${DOCTOR.name} | ${DOCTOR.title} in Adhartal, Jabalpur`,
  description: `${DOCTOR.name}, ${DOCTOR.degree} — ${DOCTOR.title} at ${DOCTOR.clinicName}, Adhartal, Jabalpur. Fracture treatment with same-visit digital X-ray, fellowship-trained arthritis & rheumatology care, sports injury treatment, and an in-house physiotherapy centre. OPD Mon–Sat.`,
  keywords: [
    "orthopaedic surgeon Jabalpur",
    "orthopaedic doctor Adhartal",
    "bone specialist Jabalpur",
    "fracture treatment Jabalpur",
    "arthritis doctor Jabalpur",
    "rheumatoid arthritis treatment Jabalpur",
    "knee pain doctor Jabalpur",
    "sports injury treatment Jabalpur",
    "ACL treatment Jabalpur",
    "Dr Sushil Kumar Patle",
    "Patle Health Care Center",
    "physiotherapy centre Adhartal",
    "digital x-ray Adhartal",
  ],
  authors: [{ name: DOCTOR.name }],
  openGraph: {
    title: `${DOCTOR.name} | ${DOCTOR.title} in Jabalpur`,
    description: `Bone, joint & arthritis care at ${DOCTOR.clinicName}, Adhartal, Jabalpur — fracture treatment, rheumatology, sports injuries, X-ray & physiotherapy at one clinic.`,
    url: SITE_URL,
    siteName: DOCTOR.clinicName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${DOCTOR.name} — ${DOCTOR.title}, ${DOCTOR.clinicName}, Adhartal, Jabalpur`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DOCTOR.name} | ${DOCTOR.title} in Jabalpur`,
    description: `Expert bone & joint care at ${DOCTOR.clinicName}, Adhartal, Jabalpur.`,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  themeColor: "#0D9488",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        {/* Navbar lives OUTSIDE the page-transition wrapper (app/template.tsx):
            page animations can never move it, and it doesn't re-mount between
            routes — it stays pinned while content fades beneath it. */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}

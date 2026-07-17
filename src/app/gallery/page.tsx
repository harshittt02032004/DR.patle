import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/ui/PageHero";
import { DOCTOR } from "@/lib/constants";
import { SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Gallery | ${DOCTOR.clinicName}, Adhartal Jabalpur`,
  description: `Inside ${DOCTOR.clinicName}, Adhartal, Jabalpur — real photos of the physiotherapy centre, plus the consultation room and digital X-ray facility where ${DOCTOR.name} treats patients.`,
  alternates: { canonical: `${SITE_URL}/gallery` },
};

type Tile = {
  type: "photo" | "illustration";
  src: string;
  label: string;
  note: string;
};

const TILES: Tile[] = [
  {
    type: "photo",
    src: "/images/gallery/physio-exercise.jpg",
    label: "Physiotherapy — Exercise Area",
    note: "Parallel bars, quadriceps table, and shoulder pulleys — where knees and shoulders earn their strength back, one session at a time.",
  },
  {
    type: "photo",
    src: "/images/gallery/physio-treatment.jpg",
    label: "Physiotherapy — Treatment Room",
    note: "Traction beds and electrotherapy units for pain-relief sessions, set up and supervised by the physiotherapy team.",
  },
  {
    type: "photo",
    src: "/images/gallery/physio-therapy-room.jpg",
    label: "Therapy & Recovery Room",
    note: "Hand-exercise boards and therapy tables — the fine-motor side of rehabilitation, for wrists, hands, and fingers.",
  },
  {
    type: "illustration",
    src: "/images/gallery/clinic-exterior.svg",
    label: "The Clinic on Main Road",
    note: "Right on Main Road, Adhartal — look for the board, you can't miss it.",
  },
  {
    type: "illustration",
    src: "/images/gallery/reception.svg",
    label: "Reception & Waiting Area",
    note: "Tell the front desk you've arrived; OPD runs in order, and waits are honest.",
  },
  {
    type: "illustration",
    src: "/images/gallery/consultation.svg",
    label: "Consultation Room",
    note: "Where you sit down with Dr. Patle — history first, examination second, verdict explained.",
  },
  {
    type: "photo",
    src: "/images/gallery/xray-room.jpg",
    label: "Digital X-Ray Room",
    note: "X-ray is done here during the consultation itself.",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
  ],
};

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PageHero
        title="Inside the Clinic"
        tagline="A walk through Patle Health Care Center before you visit — the rooms you'll sit in, the equipment that will look after you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="bg-mist py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
                <Image
                  src={DOCTOR.photo}
                  alt={`${DOCTOR.name} at ${DOCTOR.clinicName}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-sm font-semibold text-heading">
                  Dr. Patle, at his desk
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  The spine models behind him aren&apos;t decoration — they get
                  used in nearly every consultation to show you what&apos;s
                  going on.
                </p>
              </figcaption>
            </figure>

            {TILES.map((tile) => (
              <figure
                key={tile.label}
                className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
                  {tile.type === "photo" ? (
                    <Image
                      src={tile.src}
                      alt={`${tile.label} at ${DOCTOR.clinicName}, Adhartal, Jabalpur`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tile.src}
                      alt={`Illustration: ${tile.label} at ${DOCTOR.clinicName}`}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <figcaption className="p-4">
                  <p className="text-sm font-semibold text-heading">
                    {tile.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {tile.note}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-faint">
            The X-ray room and physiotherapy centre photos are the real thing.
            The remaining illustrations swap out for photographs as we shoot
            each room.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

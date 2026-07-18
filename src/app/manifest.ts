import type { MetadataRoute } from "next";
import { DOCTOR } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${DOCTOR.name} — ${DOCTOR.title}`,
    short_name: "Dr. Patle",
    description: `Bone, joint & arthritis care at ${DOCTOR.clinicName}, Adhartal, Jabalpur.`,
    start_url: "/",
    display: "browser",
    background_color: "#FAF9F6",
    theme_color: "#0D9488",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}

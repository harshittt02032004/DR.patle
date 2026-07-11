"use client";

import { motion } from "framer-motion";
import { DOCTOR } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${DOCTOR.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-pulse-glow" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.687 4.523 1.875 6.36L4 29l7.86-1.845A11.93 11.93 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm6.977 16.87c-.297.837-1.474 1.6-2.44 1.79-.657.128-1.474.203-3.887-.837-3.244-1.402-5.316-4.588-5.472-4.794-.156-.207-1.29-1.72-1.29-3.28 0-1.56.816-2.328 1.104-2.646.288-.318.63-.397.84-.397.21 0 .42.002.605.011.194.01.454-.074.71.541.264.634.9 2.2.978 2.36.078.16.13.348.026.556-.104.207-.156.336-.31.517-.156.18-.328.402-.468.541-.156.155-.318.323-.137.633.182.31.81 1.335 1.738 2.16 1.192 1.062 2.197 1.39 2.51 1.545.312.155.494.13.676-.078.183-.207.78-.907.988-1.219.208-.31.416-.259.702-.155.286.104 1.816.856 2.128 1.011.312.155.52.233.598.362.078.13.078.75-.219 1.587Z" />
      </svg>
    </motion.a>
  );
}

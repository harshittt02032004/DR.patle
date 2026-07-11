"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      key={testimonial.name}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
      className="flex flex-1 flex-col justify-center"
    >
      <div className="mb-4 flex gap-1 text-amber-400">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400" strokeWidth={0} />
        ))}
      </div>
      <p className="text-lg leading-relaxed text-ondark md:text-xl">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <p className="mt-6 font-serif text-base font-semibold text-white">
        {testimonial.name}
      </p>
    </motion.div>
  );
}

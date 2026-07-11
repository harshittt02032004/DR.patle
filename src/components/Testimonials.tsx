"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import TestimonialCard from "./ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="bg-dark-gradient relative overflow-hidden py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />
      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Patient Experiences"
          title="What Our Patients Say"
          light
        />

        <div className="mx-auto max-w-2xl">
          <div className="glass-dark relative flex min-h-[260px] flex-col rounded-3xl p-8 md:p-10">
            <Quote className="h-9 w-9 text-teal/30" />

            <AnimatePresence mode="wait">
              <TestimonialCard
                key={active}
                testimonial={TESTIMONIALS[active]}
              />
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-8 bg-teal" : "w-2.5 bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

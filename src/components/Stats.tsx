"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="border-b border-navy/5 bg-white py-14">
      <div className="section-container grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="bg-gradient-to-r from-teal to-teal-light bg-clip-text font-serif text-3xl font-bold text-transparent md:text-4xl">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
              />
            </p>
            <p className="mt-2 text-sm font-medium text-navy/60 md:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

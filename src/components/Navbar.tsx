"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { DOCTOR, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-nav py-3" : "py-4"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal font-serif text-lg font-bold text-white">
            P
          </span>
          <span className="font-serif text-lg font-bold leading-tight text-heading md:text-xl">
            Dr. Sushil Kumar Patle
            <span className="block text-xs font-sans font-medium tracking-wide text-teal">
              Consultant Orthopaedic Surgeon
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-muted hover:text-heading transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${DOCTOR.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-heading hover:text-teal transition-colors"
          >
            <Phone className="h-4 w-4" />
            {DOCTOR.phone}
          </a>
          <a
            href="#appointment"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#appointment");
            }}
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-hover transition-all hover:bg-teal-dark hover:scale-105"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="lg:hidden text-heading"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-line"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-medium text-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${DOCTOR.phoneRaw}`}
                className="flex items-center gap-2 text-base font-semibold text-teal"
              >
                <Phone className="h-4 w-4" />
                {DOCTOR.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

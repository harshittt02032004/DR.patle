"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { DOCTOR, NAV_LINKS, SERVICES } from "@/lib/constants";

const SPRING_EASE = "ease-[cubic-bezier(0.23,1,0.32,1)]";

const linkBase = `inline-block px-3.5 py-2 text-[13px] font-medium border-b-2 transition-all duration-300 ${SPRING_EASE}`;
const linkIdle =
  "text-muted border-transparent hover:text-heading hover:-translate-y-0.5";
const linkActive = "text-teal font-bold tracking-[0.3px] border-teal";

const mobileLinkBase = `block text-base font-medium transition-transform duration-300 ${SPRING_EASE} active:-translate-y-0.5`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ${SPRING_EASE} ${
        scrolled
          ? "h-16 bg-cream/85 backdrop-blur-[20px] backdrop-saturate-[1.3] shadow-[0_4px_24px_rgba(15,40,38,0.06)] border-b border-line-light"
          : "h-[68px] bg-cream/95 border-b border-transparent"
      }`}
    >
      {scrolled && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 opacity-50 bg-[linear-gradient(90deg,transparent,#0D9488,#14B8A6,#0D9488,transparent)]"
        />
      )}

      <nav className="section-container flex h-full items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl bg-teal font-serif text-lg font-bold text-white shadow-[0_2px_8px_rgba(13,148,136,0.15)] transition-all duration-[400ms] ${SPRING_EASE} group-hover:-rotate-[8deg] group-hover:scale-[1.08] group-hover:shadow-[0_4px_16px_rgba(13,148,136,0.3)]`}
          >
            P
          </span>
          <span className="font-serif text-base font-bold leading-tight text-heading md:text-lg">
            Dr. Sushil Kumar Patle
            <span className="block text-[11px] font-sans font-medium tracking-wide text-teal">
              Consultant Orthopaedic Surgeon
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`${linkBase} ${
                    isActive("/services") ? linkActive : linkIdle
                  } flex items-center gap-1`}
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 opacity-50 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lift">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-teal-pale hover:text-heading ${
                              pathname === `/services/${service.slug}`
                                ? "bg-teal-pale text-teal"
                                : "text-body"
                            }`}
                          >
                            {service.title}
                          </Link>
                        ))}
                        <div className="mt-1 border-t border-line-light pt-1">
                          <Link
                            href="/services"
                            className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-teal transition-colors hover:bg-teal-pale"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${
                  isActive(link.href) ? linkActive : linkIdle
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${DOCTOR.phoneRaw}`}
            className="flex items-center gap-1.5 text-[13px] font-medium text-heading transition-colors duration-200 hover:text-teal"
          >
            <Phone className="h-3.5 w-3.5" />
            {DOCTOR.phone}
          </a>
          <Link
            href="/book-appointment"
            className={`relative overflow-hidden rounded-[10px] bg-teal px-6 py-2.5 text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(13,148,136,0.15)] transition-all duration-[350ms] ${SPRING_EASE} hover:bg-teal-dark hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(13,148,136,0.3)] after:absolute after:inset-0 after:content-[''] after:bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100`}
          >
            Book Appointment
          </Link>
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
            className="lg:hidden absolute top-full left-0 right-0 overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-line shadow-nav"
          >
            <div className="section-container flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className={`flex w-full items-center justify-between text-base font-medium ${
                        isActive("/services") ? "text-teal" : "text-body"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        Services
                        <ChevronDown
                          className={`h-4 w-4 opacity-50 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 flex flex-col gap-2.5 border-l-2 border-teal-lighter pl-4">
                            <Link
                              href="/services"
                              className={`${mobileLinkBase} text-sm font-semibold text-teal`}
                            >
                              All Services
                            </Link>
                            {SERVICES.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={`${mobileLinkBase} text-sm text-muted`}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${mobileLinkBase} ${
                      isActive(link.href) ? "text-teal font-bold" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/book-appointment"
                className={`mt-1 inline-flex w-fit items-center rounded-[10px] bg-teal px-6 py-3 text-[13px] font-bold text-white shadow-[0_2px_8px_rgba(13,148,136,0.15)] transition-transform duration-300 ${SPRING_EASE} active:-translate-y-0.5`}
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${DOCTOR.phoneRaw}`}
                className="flex items-center gap-2 text-base font-semibold text-heading transition-colors duration-200 hover:text-teal"
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

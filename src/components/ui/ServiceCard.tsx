"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/constants";

const SPRING = "ease-[cubic-bezier(.16,1,.3,1)]";

type ServiceCardProps = {
  service: Service;
  /** Tailwind aspect-ratio classes, responsive allowed */
  aspect?: string;
  /** next/image sizes hint */
  sizes?: string;
  /** Controlled touch-toggle state (parent coordinates one-open-at-a-time) */
  isActive?: boolean;
  onToggle?: () => void;
};

export default function ServiceCard({
  service,
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  isActive,
  onToggle,
}: ServiceCardProps) {
  // Uncontrolled fallback so the card also works standalone (services hub)
  const [selfActive, setSelfActive] = useState(false);
  const active = onToggle ? !!isActive : selfActive;

  const handleClick = () => {
    // Touch devices toggle the overlay; hover devices already show it
    if (window.matchMedia("(hover: none)").matches) {
      if (onToggle) onToggle();
      else setSelfActive((v) => !v);
    }
  };

  return (
    <div
      data-active={active}
      onClick={handleClick}
      className={`group relative isolate cursor-pointer overflow-hidden rounded-[20px] bg-darkteal shadow-[0_8px_24px_rgba(13,148,136,0.06)] transition-shadow duration-[450ms] ${SPRING} hover:shadow-[0_24px_48px_rgba(13,148,136,0.2)] data-[active=true]:shadow-[0_24px_48px_rgba(13,148,136,0.2)] ${aspect}`}
    >
      {/* Layer 0 — background image + permanent gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} at Patle Health Care Center, Jabalpur`}
          fill
          sizes={sizes}
          className={`transform-gpu object-cover transition-transform duration-700 ${SPRING} group-hover:scale-[1.08] group-data-[active=true]:scale-[1.08]`}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.55)_100%)]"
      />

      {/* Layer 1 — category pill */}
      <span className="absolute left-4 top-4 z-[3] rounded-full bg-white/90 px-[13px] py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[1.4px] text-teal shadow-[0_4px_12px_rgba(13,148,136,0.16)] transition-opacity duration-[400ms] group-hover:opacity-0 group-data-[active=true]:opacity-0">
        {service.tag}
      </span>

      {/* Layer 2 — title, always visible */}
      <h3
        className={`pointer-events-none absolute bottom-5 left-5 right-5 z-[3] text-[clamp(1.1rem,1.6vw,1.35rem)] font-bold leading-[1.2] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] transition-transform duration-500 ${SPRING} group-hover:-translate-y-1.5 group-data-[active=true]:-translate-y-1.5`}
      >
        {service.title}
      </h3>

      {/* Layer 3 — hover overlay panel */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[2] translate-y-[70%] transform-gpu bg-[linear-gradient(0deg,#064E4A_0%,#0D9488_75%,transparent_100%)] p-5 pb-[68px] transition-transform duration-[550ms] ${SPRING} group-hover:pointer-events-auto group-hover:translate-y-0 group-data-[active=true]:pointer-events-auto group-data-[active=true]:translate-y-0`}
      >
        <p className="translate-y-2 text-[13px] leading-[1.55] text-white/95 opacity-0 transition-all delay-[120ms] duration-[450ms] group-hover:translate-y-0 group-hover:opacity-100 group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100">
          {service.description}
        </p>
        <Link
          href={`/services/${service.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="group/link mt-3 inline-flex translate-y-2 items-center gap-1 text-[13px] font-semibold text-teal-mint opacity-0 transition-all delay-200 duration-[450ms] hover:text-white group-hover:translate-y-0 group-hover:opacity-100 group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100"
        >
          Learn more
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  tagline?: string;
  crumbs: Crumb[];
};

export default function PageHero({ title, tagline, crumbs }: PageHeroProps) {
  return (
    <section className="bg-hero-gradient relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal/5 blur-3xl"
      />
      <div className="section-container relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm">
            {crumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-faint" aria-hidden="true" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="font-medium text-muted transition-colors hover:text-teal"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-teal">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="max-w-3xl font-serif text-3xl font-extrabold leading-tight text-heading sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {tagline && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
}

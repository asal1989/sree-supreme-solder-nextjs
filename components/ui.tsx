import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

const BASE =
  "arrow-hover inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 min-h-12";

const VARIANTS = {
  primary:
    "bg-copper text-white shadow-[0_8px_24px_rgba(194,87,12,0.35)] hover:bg-copper-2 hover:shadow-[0_12px_28px_rgba(194,87,12,0.45)]",
  secondary:
    "border border-white/30 text-white hover:border-amber hover:bg-white/5 hover:text-amber",
  outline: "border border-ink/20 text-ink hover:border-copper hover:text-copper",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof VARIANTS;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
      {children} <span aria-hidden className="arrow-move">&rarr;</span>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span
        className={`eyebrow inline-flex items-center gap-3 ${dark ? "text-amber" : "text-copper"}`}
      >
        <span className={`h-px w-8 ${dark ? "bg-amber" : "bg-copper"}`} aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-cream" : "text-muted"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}

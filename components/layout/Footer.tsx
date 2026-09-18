import Image from "next/image";
import Link from "next/link";
import { Gem, Users, Settings2, Leaf, MapPin, Phone, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { products } from "@/data/products";
import { quickLinks, siteConfig } from "@/config/site";

// lucide-react no longer ships brand icons, so LinkedIn/YouTube are small inline SVGs.
function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.3c0-2.6-.2-4-.9-4.8-.7-.8-1.5-1-3.2-1.1C15.8 6.3 12 6.3 12 6.3s-3.8 0-5.9.1c-1.7.1-2.5.3-3.2 1.1-.7.8-.9 2.2-.9 4.8v-.6c0 2.6.2 4 .9 4.8.7.8 1.5 1 3.2 1.1 2.1.2 5.9.2 5.9.2s3.8 0 5.9-.2c1.7-.1 2.5-.3 3.2-1.1.7-.8.9-2.2.9-4.8v.6ZM9.9 15.1V9.5l5.2 2.8-5.2 2.8Z" />
    </svg>
  );
}

// Renders a real link when a verified URL is configured, otherwise a
// non-interactive, clearly-labelled placeholder — no invented URLs.
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string | null;
  label: string;
  children: React.ReactNode;
}) {
  const className =
    "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all hover:scale-105 hover:border-copper hover:text-amber";

  if (!href) {
    return (
      <span
        aria-label={`${label} (coming soon)`}
        title={`${label} (coming soon)`}
        className={`${className} cursor-not-allowed opacity-40`}
      >
        {children}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Sree Supreme Solder on ${label}`} className={className}>
      {children}
    </a>
  );
}

const VALUE_INDICATORS = [
  { icon: Gem, label: "Quality", sub: "Our Foundation" },
  { icon: Users, label: "Customers", sub: "Our Focus" },
  { icon: Settings2, label: "Innovation", sub: "Our Drive" },
  { icon: Leaf, label: "A Better Tomorrow", sub: "Our Purpose" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
      {children}
      <span className="mt-2 block h-px w-6 bg-copper" />
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-dark text-cream">
      {/* Subtle circuit-line pattern, far edges only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-56 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-copper) 1px, transparent 1px), linear-gradient(90deg, var(--color-copper) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      {/* Subtle Madurai visual treatment, lower-right */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 sm:h-96 sm:w-[28rem]">
        <Image
          src="/assets/img/about-madurai.webp"
          alt=""
          fill
          className="object-cover object-left-bottom opacity-[0.16] mix-blend-luminosity"
          style={{ filter: "sepia(0.5) saturate(1.4) hue-rotate(-10deg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-dark/20 via-dark/70 to-dark" />
      </div>
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-6 hidden text-right sm:block">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-cream/70">
          Madurai
        </span>
        <span className="mt-1 block text-[10px] font-medium uppercase leading-relaxed tracking-[0.15em] text-cream/45">
          A Legacy
          <br />
          That Connects
          <br />
          The World
        </span>
        <span className="ml-auto mt-2 block h-px w-10 bg-copper" />
      </div>

      <Reveal>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {/* Column 1 — Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image src="/assets/img/logo.png" alt="Sree Supreme Solder logo" width={44} height={44} />
              <span>
                <span className="block text-base font-bold tracking-wide text-white">
                  {siteConfig.name.toUpperCase()}
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-amber">
                  {siteConfig.tagline}
                </span>
              </span>
            </div>
            <span className="mt-4 block h-px w-10 bg-copper" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">{siteConfig.description}</p>

            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-6">
              {VALUE_INDICATORS.map((v) => (
                <div key={v.label} className="group flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/40 text-amber transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgba(198,90,22,0.45)]">
                    <v.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="mt-2 text-xs font-semibold text-white">{v.label}</span>
                  <span className="text-[11px] text-cream/50">{v.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <nav aria-label="Quick links">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-amber">
                    {link.label}
                    <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/downloads/sree-supreme-solder-catalog.pdf"
                  download
                  className="group inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-amber"
                >
                  Download Catalog (PDF)
                  <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                    &rarr;
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3 — Products */}
          <nav aria-label="Product links">
            <ColumnHeading>Our Products</ColumnHeading>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-amber"
                  >
                    {product.name}
                    <span className="translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Contact */}
          <div>
            <ColumnHeading>Contact Us</ColumnHeading>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-amber">
                  <MapPin size={16} strokeWidth={1.75} />
                </span>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-1.5 text-cream/70 transition-colors hover:text-amber"
                >
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-amber">
                  <Phone size={16} strokeWidth={1.75} />
                </span>
                <a href={siteConfig.phoneHref} className="text-cream/70 transition-colors hover:text-amber">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-amber">
                  <Mail size={16} strokeWidth={1.75} />
                </span>
                <a href={siteConfig.emailHref} className="text-cream/70 transition-colors hover:text-amber">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <SocialIcon href={siteConfig.socials.linkedin} label="LinkedIn">
                <LinkedinIcon size={15} />
              </SocialIcon>
              <SocialIcon href={siteConfig.socials.youtube} label="YouTube">
                <YoutubeIcon size={15} />
              </SocialIcon>
              <a
                href={siteConfig.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our location on the map"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-all hover:scale-105 hover:border-copper hover:text-amber"
              >
                <MapPin size={15} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Column 5 — Stay Connected */}
          <div>
            <ColumnHeading>Stay Connected</ColumnHeading>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              Get the latest updates on our products, industries and innovations.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Bottom bar */}
      <div className="relative border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-6 text-xs text-cream/60 sm:px-8 lg:flex-row lg:justify-between">
          <span className="text-center lg:text-left">
            &copy; {year} {siteConfig.name}, Madurai. All rights reserved.
          </span>

          <span className="text-center">
            <span className="font-script text-lg text-amber">From Madurai To A Smarter World</span>
            <span className="mx-auto mt-1 block h-px w-16 bg-copper" />
          </span>

          <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <Link href={siteConfig.legalLinks.privacy} className="hover:text-amber">
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link href={siteConfig.legalLinks.terms} className="hover:text-amber">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden>|</span>
            <Link href={siteConfig.legalLinks.sitemap} className="hover:text-amber">
              Sitemap
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { CalendarDays, Users, ShieldCheck, Phone, Mail, Search, X } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { LinkedinIcon, YoutubeIcon, SocialIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/config/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

const utilitySocialClass =
  "flex h-6 w-6 items-center justify-center rounded-full text-cream/70 transition-colors hover:text-amber";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.53 3.69-8.22 8.25-8.22 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 0 1 2.41 5.81c0 4.53-3.69 8.22-8.24 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/products?search=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="relative hidden overflow-hidden bg-dark text-cream lg:block">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-10 bg-gradient-to-br from-copper to-copper-2"
          style={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)" }}
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 pl-16 text-xs sm:px-8 sm:pl-16">
          <div className="flex items-center gap-4 text-cream/75">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} strokeWidth={1.75} /> Established in 1986
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span className="flex items-center gap-1.5">
              <Users size={13} strokeWidth={1.75} /> Trusted by Industry Leaders
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} strokeWidth={1.75} /> Quality &middot; Reliability &middot; Innovation
            </span>
          </div>

          <div className="flex items-center gap-4 text-cream/75">
            <a href={siteConfig.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-amber">
              <Phone size={13} strokeWidth={1.75} /> {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="flex items-center gap-1.5 transition-colors hover:text-amber">
              <Mail size={13} strokeWidth={1.75} /> {siteConfig.email}
            </a>
            <div className="flex items-center gap-1 border-l border-white/15 pl-3">
              <SocialIcon href={siteConfig.socials.linkedin} label="LinkedIn" className={utilitySocialClass}>
                <LinkedinIcon size={13} />
              </SocialIcon>
              <SocialIcon href={siteConfig.socials.youtube} label="YouTube" className={utilitySocialClass}>
                <YoutubeIcon size={13} />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="relative overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-40 bg-gradient-to-br from-copper to-copper-2 min-[1700px]:block"
          style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <p className="absolute right-5 top-1/2 max-w-[7rem] -translate-y-1/2 text-right text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-white/90">
            Innovative Soldering Solutions
            <br />
            for a Smarter Tomorrow
          </p>
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image src="/assets/img/logo.png" alt="Sree Supreme Solder logo" width={40} height={40} priority />
            <span className="leading-tight">
              <span className="block whitespace-nowrap text-sm font-bold tracking-wide text-ink sm:text-base">
                SREE SUPREME SOLDER
              </span>
              <span className="block whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.15em] text-muted sm:text-[9px]">
                Connecting a Better Tomorrow
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap pb-1 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-copper" : "text-muted hover:text-copper"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-copper" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search products"
                aria-expanded={searchOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-copper hover:text-copper"
              >
                {searchOpen ? <X size={16} /> : <Search size={16} />}
              </button>
              {searchOpen && (
                <form
                  onSubmit={submitSearch}
                  className="absolute right-0 top-12 flex w-64 items-center overflow-hidden rounded-full border border-line bg-white shadow-lg"
                >
                  <input
                    autoFocus
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products…"
                    className="w-full bg-transparent px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60"
                  />
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="flex h-9 w-9 shrink-0 items-center justify-center text-copper"
                  >
                    <Search size={15} />
                  </button>
                </form>
              )}
            </div>

            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { source: "header" })}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#25D366]/40 px-4 py-2.5 text-sm font-semibold text-[#128C4A] transition-colors hover:bg-[#25D366]/10"
            >
              <WhatsAppIcon size={16} /> Chat on WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(184,98,31,0.3)] transition-transform hover:scale-105"
            >
              Get a Quote <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3 text-sm font-medium last:border-0 ${
                  isActive(item.href) ? "text-copper" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white"
            >
              Get a Quote <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("whatsapp_click", { source: "mobile_menu" });
                setOpen(false);
              }}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

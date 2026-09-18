"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/img/logo.png" alt="Sree Supreme Solder logo" width={40} height={40} priority />
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide text-ink sm:text-base">
              SREE SUPREME SOLDER
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted sm:text-xs">
              Connecting a Better Tomorrow
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-copper"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(184,98,31,0.3)] transition-transform hover:scale-105"
          >
            Get a Quote <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
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

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm font-medium text-ink last:border-0"
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
          </nav>
        </div>
      )}
    </header>
  );
}

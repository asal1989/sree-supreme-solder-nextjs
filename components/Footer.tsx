import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/quality", label: "Quality" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #e8792a, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/assets/img/logo.png" alt="Sree Supreme Solder logo" width={38} height={38} />
            <span className="text-base font-bold tracking-wide text-white">SREE SUPREME SOLDER</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Manufacturer of solder wires, solder sticks, liquid flux and solder paint from Madurai,
            Tamil Nadu — delivering consistent, reliable soldering materials since 1986.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/70 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
            <li>6, Nehru Nagar, Nethaji Road, Bypass Road, Madurai – 625003, Tamil Nadu, India</li>
            <li>
              <a href="tel:+919944482330" className="hover:text-white">
                +91 99444 82330
              </a>
            </li>
            <li>
              <a href="mailto:info@sreesupremesolder.in" className="hover:text-white">
                info@sreesupremesolder.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-line-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-cream/60 sm:flex-row sm:px-8">
          <span>&copy; {year} Sree Supreme Solder, Madurai. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden>&middot;</span>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

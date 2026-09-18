import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { quickLinks, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sitemap | Sree Supreme Solder",
  description: "A full list of pages available on the Sree Supreme Solder website.",
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Every Page, One Place"
        lead="A complete list of pages available on the Sree Supreme Solder website."
      />

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink">Main Pages</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-copper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-xl font-semibold text-ink">Products</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-sm text-muted hover:text-copper"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="font-display text-xl font-semibold text-ink">Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href={siteConfig.legalLinks.privacy} className="text-sm text-muted hover:text-copper">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={siteConfig.legalLinks.terms} className="text-sm text-muted hover:text-copper">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FileCog, ArrowRight, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("search") || "").trim().toLowerCase();

  const filtered = query
    ? products.filter(
        (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      )
    : products;

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Our Product Range
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Explore Our Products
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            High-performance soldering materials designed to meet the evolving needs of modern
            electronics and industrial manufacturing.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          {query ? (
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-copper"
            >
              <X size={16} /> Clear search: &ldquo;{query}&rdquo;
            </Link>
          ) : (
            <Link
              href="#gallery"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-copper"
            >
              Browse All Products <ArrowRight size={16} />
            </Link>
          )}
        </Reveal>
      </div>

      {filtered.length === 0 ? (
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-xl border border-line bg-bg-alt p-10 text-center">
            <p className="text-base font-medium text-ink">No products match &ldquo;{query}&rdquo;.</p>
            <p className="mt-2 text-sm text-muted">Try a different term, or browse the full range.</p>
            <Link
              href="/products"
              className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-copper"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}

          {!query && (
            <Reveal delay={filtered.length * 0.06}>
              <div className="flex h-full flex-col justify-center rounded-xl border border-line bg-bg-alt p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-copper/10 text-copper">
                  <FileCog size={22} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  Need a Custom Solution?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We can develop soldering materials tailored to your specific requirements.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-copper"
                >
                  Get in Touch <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      )}
    </section>
  );
}

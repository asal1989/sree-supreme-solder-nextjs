import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Product } from "@/data/products";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-copper"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="grid gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {product.galleryImage && product.galleryImage !== product.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10">
                <Image
                  src={product.galleryImage}
                  alt={`${product.name} product range`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Product
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted">{product.description}</p>

          <div className="mt-8 grid gap-8 border-t border-line pt-8">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Product Highlights</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Applications</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">Available Forms / Sizes</h2>
                <p className="mt-2 text-sm text-muted">{product.forms}</p>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">Packaging</h2>
                <p className="mt-2 text-sm text-muted">{product.packaging}</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Technical Information</h2>
              <p className="mt-2 text-sm text-muted">Contact our team for product specifications.</p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(184,98,31,0.3)] transition-transform hover:scale-105"
            >
              Request Product Details <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-copper hover:text-copper"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

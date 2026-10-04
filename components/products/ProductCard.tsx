import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-line bg-panel transition-all duration-300 hover:-translate-y-1.5 hover:border-copper hover:shadow-[0_18px_40px_rgba(11,22,38,0.12)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted transition-colors group-hover:text-ink">{product.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-copper">
          View Details
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

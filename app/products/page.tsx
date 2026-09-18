import type { Metadata } from "next";
import { Suspense } from "react";
import ProductHero from "@/components/products/ProductHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductBenefits from "@/components/products/ProductBenefits";
import IndustriesSection from "@/components/products/IndustriesSection";
import QualitySection from "@/components/products/QualitySection";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCTA from "@/components/products/ProductCTA";

export const metadata: Metadata = {
  title: "Sree Supreme Solder | Solder Wires, Flux & Soldering Solutions",
  description:
    "Explore Sree Supreme Solder's range of solder wires, lead-free solder wires, solder sticks, liquid flux and solder paint for electronics and industrial applications.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Sree Supreme Solder | Solder Wires, Flux & Soldering Solutions",
    description:
      "Explore Sree Supreme Solder's range of solder wires, lead-free solder wires, solder sticks, liquid flux and solder paint for electronics and industrial applications.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <Suspense fallback={null}>
        <ProductGrid />
      </Suspense>
      <ProductBenefits />
      <IndustriesSection />
      <QualitySection />
      <ProductGallery />
      <ProductCTA />
    </>
  );
}

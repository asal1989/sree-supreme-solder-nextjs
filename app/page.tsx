import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import WhyUs from "@/components/WhyUs";
import IndustriesGrid from "@/components/IndustriesGrid";
import QualitySection from "@/components/QualitySection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import ProductCard from "@/components/products/ProductCard";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { products } from "@/data/products";
import { INDUSTRIES } from "@/data/home";
import { yearsInBusiness } from "@/lib/company";

export const metadata: Metadata = {
  title: { absolute: "Sree Supreme Solder | Solder Wire, Sticks & Flux Manufacturer, Madurai" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats
        stats={[
          { value: yearsInBusiness(), suffix: "+", label: "Years of Experience" },
          { value: products.length, label: "Product Categories" },
          { value: INDUSTRIES.length, label: "Industries Served" },
          { text: "RoHS", label: "Lead-Free Options" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Our Product Range"
          title="Precision Soldering Solutions"
          lead="Engineered materials for reliable, consistent and efficient soldering applications."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/products" variant="outline">View All Products</ButtonLink>
        </div>
      </section>

      <WhyUs />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Powering Industries Through Better Connections"
          lead="Trusted soldering materials for the products and systems that keep the world moving."
        />
        <div className="mt-12">
          <IndustriesGrid />
        </div>
      </section>

      <QualitySection />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <Image src="/assets/img/world-map.svg" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <Reveal>
            <div className="relative mx-auto max-w-md overflow-hidden shadow-2xl">
              <Image
                src="/assets/img/madurai-journey-card.webp"
                alt="Meenakshi Amman Temple at sunset, Madurai — a legacy that connects the world"
                width={938}
                height={638}
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Journey · Since 1986"
              title="From Madurai to Industries Across India"
              lead="Founded by Mr. P. Sekar in Madurai, Tamil Nadu, Sree Supreme Solder has been delivering high-quality soldering materials for four decades, connecting a better tomorrow through consistent quality and reliable soldering solutions."
            />
            <Reveal delay={0.1} className="mt-8">
              <ButtonLink href="/about" variant="outline">Know Our Story</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />
      <Certifications />
      <CTASection />
    </>
  );
}

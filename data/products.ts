export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  galleryImage?: string;
  highlights: string[];
  applications: string[];
  forms: string;
  packaging: string;
};

export const products: Product[] = [
  {
    slug: "solder-wires",
    name: "No-Clean Solder Wires",
    description:
      "High performance solder wires for superior wetting and stronger joints.",
    image: "/assets/img/product-wire.webp",
    galleryImage: "/assets/img/supreme-wire-blue-range.jpg",
    highlights: ["Superior wetting", "Consistent melt flow", "Minimal residue"],
    applications: ["PCB assembly", "Electronic component soldering", "Industrial wiring"],
    forms: "Available in multiple spool sizes and wire diameters.",
    packaging: "Supplied in standard reels and spools.",
  },
  {
    slug: "urea-flux-cored-solder-wires",
    name: "Urea Flux-Cored Solder Wires",
    description:
      "Flux-cored construction engineered for reliable, consistent soldering performance.",
    image: "/assets/img/supreme-wire-orange-range.jpg",
    galleryImage: "/assets/img/supreme-wire-orange-range.jpg",
    highlights: ["Integrated flux core", "Stable soldering performance", "Reduced oxidation"],
    applications: ["Electronics manufacturing", "Electrical assembly", "Repair and maintenance work"],
    forms: "Available in multiple spool sizes and wire diameters.",
    packaging: "Supplied in standard reels and spools.",
  },
  {
    slug: "lead-free-solder-wires",
    name: "Lead-Free Solder Wires",
    description:
      "Environmentally responsible solder wires for modern electronics manufacturing.",
    image: "/assets/img/product-leadfree.webp",
    galleryImage: "/assets/img/supreme-wire-purple-range.jpg",
    highlights: ["Lead-free formulation", "RoHS-oriented composition", "Dependable joint strength"],
    applications: ["Consumer electronics", "Industrial electronics", "PCB assembly"],
    forms: "Available in multiple spool sizes and wire diameters.",
    packaging: "Supplied in standard reels and spools.",
  },
  {
    slug: "solder-sticks",
    name: "Solder Sticks",
    description:
      "Consistent quality solder sticks for industrial and electronic applications.",
    image: "/assets/img/product-sticks.webp",
    galleryImage: "/assets/img/supreme-solder-sticks-wide.jpg",
    highlights: ["Consistent alloy composition", "Reliable performance", "Industrial-grade quality"],
    applications: ["Industrial soldering", "Electrical component manufacturing", "Maintenance applications"],
    forms: "Contact our team for available sizes.",
    packaging: "Contact our team for product specifications.",
  },
  {
    slug: "lead-free-solder-sticks",
    name: "Lead-Free Solder Sticks",
    description:
      "A greener alternative for industrial soldering without compromising reliability.",
    image: "/assets/img/supreme-solder-sticks-close.jpg",
    galleryImage: "/assets/img/supreme-solder-sticks-close.jpg",
    highlights: ["Lead-free formulation", "Environmentally responsible", "Dependable results"],
    applications: ["Industrial soldering", "Electrical manufacturing", "Sustainable production lines"],
    forms: "Contact our team for available sizes.",
    packaging: "Contact our team for product specifications.",
  },
  {
    slug: "liquid-flux",
    name: "Liquid Flux",
    description:
      "Excellent flux activity for better wetting and reliable connections.",
    image: "/assets/img/product-flux.webp",
    galleryImage: "/assets/img/supreme-flux-range.jpg",
    highlights: ["Strong flux activity", "Improved wetting", "Reliable flow characteristics"],
    applications: ["PCB soldering", "Component assembly", "Rework and repair"],
    forms: "Available in multiple pack sizes.",
    packaging: "Supplied in liquid flux bottles.",
  },
  {
    slug: "solder-paint",
    name: "C & D Grade Solder Paint",
    description:
      "Reliable solder paint solutions for electronics manufacturing and PCB assembly.",
    image: "/assets/img/product-paint.webp",
    galleryImage: "/assets/img/product-paint.webp",
    highlights: ["C & D grade formulation", "Consistent application", "Dependable results"],
    applications: ["PCB assembly", "Electronics manufacturing", "Component mounting"],
    forms: "Contact our team for available sizes.",
    packaging: "Contact our team for product specifications.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

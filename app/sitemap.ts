import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { quickLinks, siteConfig } from "@/config/site";

const baseUrl = "https://www.sreesupremesolder.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = quickLinks.map((link) => ({
    url: `${baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date(),
  }));

  const legalPages = [siteConfig.legalLinks.privacy, siteConfig.legalLinks.terms, siteConfig.legalLinks.sitemap].map(
    (href) => ({
      url: `${baseUrl}${href}`,
      lastModified: new Date(),
    })
  );

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...legalPages, ...productPages];
}

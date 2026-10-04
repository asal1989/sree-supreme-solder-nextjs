import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.sreesupremesolder.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/sree-supreme-solder-nextjs" : "";

const nextConfig: NextConfig = isPages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { loader: "custom", loaderFile: "./lib/pagesImageLoader.ts" },
      env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_STATIC_EXPORT: "true" },
    }
  : {};

export default nextConfig;

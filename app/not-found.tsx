import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Page Not Found | Sree Supreme Solder",
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page Not Found"
        lead="The page you're looking for doesn't exist or may have been moved."
      />
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-copper hover:underline">
          &larr; Back to Home
        </Link>
      </section>
    </>
  );
}

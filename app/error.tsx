"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start gap-5 px-5 py-24 sm:px-8">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Error</span>
      <h1 className="font-display text-3xl font-semibold text-ink">Something went wrong</h1>
      <p className="text-sm leading-relaxed text-muted">
        An unexpected error occurred while loading this page. Please try again.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-2"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-bg-alt"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to a newsletter provider (e.g. Mailchimp, Brevo, or a
    // custom API route) once one is available. No backend is wired up yet,
    // so this only confirms the UI submission locally.
    setStatus("submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Your email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="Your email address"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus-visible:border-copper"
        />
        <button
          type="submit"
          aria-label="Subscribe to updates"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copper to-copper-2 text-white transition-transform hover:scale-105"
        >
          <ArrowRight size={16} />
        </button>
      </form>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-cream/55">
        <Lock size={12} /> We respect your privacy.
      </p>
      <p role="status" className="mt-1 text-xs text-amber">
        {status === "submitted" ? "Thanks — we’ll be in touch." : ""}
      </p>
    </div>
  );
}

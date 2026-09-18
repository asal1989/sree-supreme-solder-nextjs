"use client";

import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "sent" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      trackEvent("newsletter_signup");
      setStatus("sent");
      setEmail("");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus-visible:border-copper"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe to updates"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-copper to-copper-2 text-white transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
        >
          <ArrowRight size={16} />
        </button>
      </form>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-cream/55">
        <Lock size={12} /> We respect your privacy.
      </p>
      <p role="status" className="mt-1 text-xs text-amber">
        {status === "sent" && "Thanks — we’ll be in touch."}
        {status === "error" && errorMessage}
      </p>
    </div>
  );
}

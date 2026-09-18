"use client";

import { useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sreeSupremeSiteData";

type Product = { title: string; description: string };
type SiteData = {
  heroTitle: string;
  heroLead: string;
  email: string;
  phone: string;
  address: string;
  products: Product[];
};

const DEFAULTS: SiteData = {
  heroTitle: "Quality Soldering Solutions Since 1986",
  heroLead: "Reliable soldering materials from Madurai, for a stronger connected world.",
  email: "info@sreesupremesolder.in",
  phone: "+91 99444 82330",
  address: "6, Nehru Nagar, Nethaji Road, Bypass Road, Madurai – 625003, Tamil Nadu, India",
  products: [
    { title: "Solder Wires", description: "High performance solder wires for superior wetting and stronger joints." },
    { title: "Solder Sticks", description: "Consistent quality solder sticks for industrial and electronic applications." },
    { title: "Liquid Flux", description: "Excellent flux activity for better wetting and reliable connections." },
    { title: "Solder Paint", description: "Reliable solder paint solutions for electronics manufacturing and PCB assembly." },
    { title: "Lead-Free Solutions", description: "A greener tomorrow. Same reliability." },
  ],
};

export default function AdminPage() {
  const [data, setData] = useState<SiteData>(() => {
    if (typeof window === "undefined") return DEFAULTS;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : DEFAULTS;
    } catch {
      return DEFAULTS;
    }
  });
  const [status, setStatus] = useState("Saved locally in this browser");
  const [dirty, setDirty] = useState(false);

  function update<K extends keyof SiteData>(key: K, value: SiteData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setDirty(true);
  }

  function updateProduct(index: number, field: keyof Product, value: string) {
    setData((d) => ({
      ...d,
      products: d.products.map((p, i) => (i === index ? { ...p, [field]: value } : p)),
    }));
    setDirty(true);
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setStatus("Updates saved just now");
    setDirty(false);
  }

  function handleReset() {
    localStorage.removeItem(STORAGE_KEY);
    setData(DEFAULTS);
    setStatus("Defaults restored");
    setDirty(false);
  }

  const inputClass =
    "w-full rounded-md border border-line bg-bg-alt px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-copper";

  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Website Management
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-muted">Update homepage content from one place.</p>
        </div>
        <span
          className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
            dirty ? "bg-copper/10 text-copper" : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {dirty ? "Unsaved changes" : status}
        </span>
      </div>

      <div className="mt-6 rounded-lg border border-line bg-bg-alt p-4 text-sm text-muted">
        <strong className="text-ink">Important:</strong> This browser-based dashboard stores edits in
        local storage. It is ideal for a single-device prototype; shared live editing and login
        security require a backend/database.
      </div>

      <form onSubmit={handleSave} className="mt-8 space-y-8">
        <section className="rounded-2xl border border-line bg-panel p-6 shadow-sm">
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-bold text-gold">01</span>
            <h2 className="font-display text-lg font-semibold text-ink">Hero Section</h2>
          </div>
          <p className="mt-1 text-sm text-muted">Control the first message visitors see.</p>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">Headline</label>
              <input
                required
                value={data.heroTitle}
                onChange={(e) => update("heroTitle", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">Supporting text</label>
              <textarea
                required
                rows={3}
                value={data.heroLead}
                onChange={(e) => update("heroLead", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-panel p-6 shadow-sm">
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-bold text-gold">02</span>
            <h2 className="font-display text-lg font-semibold text-ink">Products</h2>
          </div>
          <p className="mt-1 text-sm text-muted">Update product names and descriptions.</p>
          <div className="mt-5 space-y-6">
            {data.products.map((p, i) => (
              <div key={i} className="flex gap-4 border-t border-line pt-5 first:border-0 first:pt-0">
                <span className="mt-1 shrink-0 text-xs font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Product name</label>
                    <input
                      required
                      value={p.title}
                      onChange={(e) => updateProduct(i, "title", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Description</label>
                    <textarea
                      required
                      rows={2}
                      value={p.description}
                      onChange={(e) => updateProduct(i, "description", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-panel p-6 shadow-sm">
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-bold text-gold">03</span>
            <h2 className="font-display text-lg font-semibold text-ink">Contact Details</h2>
          </div>
          <p className="mt-1 text-sm text-muted">Keep the business information current.</p>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">Phone</label>
              <input value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">Address</label>
              <textarea
                rows={3}
                value={data.address}
                onChange={(e) => update("address", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform"
          >
            Save Website Updates <span aria-hidden>&rarr;</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-gold"
          >
            Reset Defaults
          </button>
          <Link
            href="/"
            className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-gold"
          >
            View Website <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </form>
    </section>
  );
}

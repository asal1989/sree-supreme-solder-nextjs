"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || "Website Visitor"}`);
    const bodyLines = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      "",
      message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:info@sreesupremesolder.in?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-bg-alt px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-copper";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name <span className="text-copper">*</span>
          </label>
          <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Company
          </label>
          <input id="company" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email <span className="text-copper">*</span>
          </label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Phone
          </label>
          <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message <span className="text-copper">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(184,98,31,0.35)] transition-transform hover:scale-105"
      >
        Send Enquiry <span aria-hidden>&rarr;</span>
      </button>
      <p className="text-xs text-muted">Fields marked * are required.</p>
    </form>
  );
}

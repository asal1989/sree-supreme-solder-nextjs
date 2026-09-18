import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sree Supreme Solder",
  description: "Tell us about your requirement and our team will get back to you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let&rsquo;s Build a Stronger Tomorrow Together"
        lead="Tell us about your requirement and our team will get back to you."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <h2 className="font-display text-xl font-semibold text-ink">Contact Information</h2>
          <ul className="mt-6 space-y-5 text-sm text-muted">
            <li className="flex gap-3">
              <span>📍</span>
              <span>6, Nehru Nagar, Nethaji Road, Bypass Road, Madurai – 625003, Tamil Nadu, India</span>
            </li>
            <li className="flex gap-3">
              <span>📞</span>
              <a href="tel:+919944482330" className="hover:text-gold">
                +91 99444 82330
              </a>
            </li>
            <li className="flex gap-3">
              <span>✉️</span>
              <a href="mailto:info@sreesupremesolder.in" className="hover:text-gold">
                info@sreesupremesolder.in
              </a>
            </li>
            <li className="flex gap-3">
              <span>🌐</span>
              <span>www.sreesupremesolder.in</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-3">
          <h2 className="font-display text-xl font-semibold text-ink">Send Us an Enquiry</h2>
          <div className="mt-6 rounded-2xl border border-line bg-panel p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </>
  );
}

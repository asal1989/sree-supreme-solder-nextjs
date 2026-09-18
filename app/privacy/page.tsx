import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sree Supreme Solder",
  description:
    "Privacy Policy for Sree Supreme Solder, Madurai — how we handle enquiry and contact information submitted through our website.",
  robots: { index: false },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-semibold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 2026</p>

      <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-ink">
        <p>
          Sree Supreme Solder (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), based at 6, Nehru
          Nagar, Nethaji Road, Bypass Road, Madurai &ndash; 625003, Tamil Nadu, India, respects your
          privacy. This policy explains what information we collect through this website and how we
          use it.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Information We Collect</h2>
          <p className="mt-2">
            When you submit the enquiry form on this website, we ask for your name, company name
            (optional), email address, phone number (optional) and message. This information is used
            solely to respond to your product or service enquiry. Submitting the form opens your own
            email client with the details addressed to us &mdash; we do not collect or store this data
            on a server as part of this website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">How We Use Your Information</h2>
          <p className="mt-2">
            Any information you send us by email, phone or WhatsApp is used only to respond to your
            enquiry, provide quotations, and communicate about orders or support. We do not sell, rent
            or share your contact details with third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Cookies and Analytics</h2>
          <p className="mt-2">
            This website does not use tracking cookies or third-party analytics scripts at this time.
            If that changes, this policy will be updated accordingly.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Third-Party Links</h2>
          <p className="mt-2">
            Our website links to external services such as WhatsApp and Google Maps for your
            convenience. These services have their own privacy policies, and we encourage you to
            review them.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Contact Us</h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@sreesupremesolder.in" className="font-medium text-gold">
              info@sreesupremesolder.in
            </a>{" "}
            or call{" "}
            <a href="tel:+919944482330" className="font-medium text-gold">
              +91 99444 82330
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

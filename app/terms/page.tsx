import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sree Supreme Solder",
  description: "Terms and Conditions for using the Sree Supreme Solder website, Madurai.",
  robots: { index: false },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-3xl font-semibold text-ink">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink">
        <p>
          These terms govern your use of the Sree Supreme Solder website. By using this website, you
          agree to the following terms.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">About This Website</h2>
          <p className="mt-2">
            This website is published by Sree Supreme Solder, a soldering materials manufacturer based
            in Madurai, Tamil Nadu, India, established in 1986. Content on this site &mdash; including
            product descriptions, images and company information &mdash; is provided for informational
            purposes to help you learn about our products and get in touch with us.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Product Information</h2>
          <p className="mt-2">
            We make reasonable efforts to keep product information accurate and up to date.
            Specifications, availability and pricing are subject to change and will be confirmed
            directly with you at the time of enquiry or order, either by phone, email or WhatsApp.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Enquiries and Quotations</h2>
          <p className="mt-2">
            Submitting the enquiry form or contacting us by phone, email or WhatsApp does not
            constitute a binding order. Orders, pricing and delivery terms are confirmed separately in
            writing between Sree Supreme Solder and the customer.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Intellectual Property</h2>
          <p className="mt-2">
            The Sree Supreme Solder name, logo and product imagery on this website belong to Sree
            Supreme Solder and may not be reproduced without permission.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Limitation of Liability</h2>
          <p className="mt-2">
            While we take care to keep this website accurate, we do not guarantee that it is
            error-free or uninterrupted, and we are not liable for any loss arising from reliance on
            information published here without direct confirmation from us.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Governing Law</h2>
          <p className="mt-2">
            These terms are governed by the laws of India, and any disputes are subject to the
            jurisdiction of the courts in Madurai, Tamil Nadu.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-gold">Contact Us</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href="mailto:info@sreesupremesolder.in" className="font-medium text-gold">
              info@sreesupremesolder.in
            </a>{" "}
            or{" "}
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

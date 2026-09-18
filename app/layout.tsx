import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

const title = "Sree Supreme Solder | Precision Soldering, Since 1986 | Madurai";
const description =
  "Sree Supreme Solder, Madurai — manufacturer of solder wires, solder sticks, liquid flux and solder paint since 1986. RoHS-compliant lead-free solutions trusted by PCB, electronics and electrical industries across India.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.sreesupremesolder.in"),
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
  openGraph: {
    title,
    description,
    siteName: "Sree Supreme Solder",
    url: "https://www.sreesupremesolder.in",
    images: ["/assets/img/logo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/img/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  additionalType: "https://schema.org/Manufacturer",
  name: "Sree Supreme Solder",
  foundingDate: "1986",
  founder: { "@type": "Person", name: "Mr. P. Sekar" },
  url: "https://www.sreesupremesolder.in",
  logo: "https://www.sreesupremesolder.in/assets/img/logo.png",
  telephone: "+91-99444-82330",
  email: "info@sreesupremesolder.in",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable} ${pinyon.variable}`}>
      <body className="flex min-h-screen flex-col bg-bg text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Sree Supreme Solder | Precision Soldering, Since 1986 | Madurai",
  description:
    "Sree Supreme Solder, Madurai — manufacturer of solder wires, solder sticks, liquid flux and solder paint since 1986. RoHS-compliant lead-free solutions trusted by PCB, electronics and electrical industries across India.",
  metadataBase: new URL("https://www.sreesupremesolder.in"),
  icons: {
    icon: "/assets/img/logo.png",
    apple: "/assets/img/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
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
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
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

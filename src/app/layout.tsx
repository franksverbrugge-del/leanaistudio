import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, company, founders } from "@/content/site";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lean AI Studio | Websites en automatisering voor het MKB",
    template: "%s | Lean AI Studio",
  },
  description:
    "Websites en automatiseringen voor MKB-bedrijven van 5 tot 50 mensen. Vaste prijs per fase, eerst zien en dan beslissen. Gebouwd met AI, gecontroleerd door ons.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Lean AI Studio",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
};

const organization = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: company.name,
      legalName: company.legalName,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      email: company.email,
      telephone: company.phone,
      vatID: company.vat,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        addressLocality: company.postalCity,
        addressCountry: company.country,
      },
      areaServed: { "@type": "Country", name: "Nederland" },
      founder: founders.map((f) => ({
        "@type": "Person",
        name: f.name,
        sameAs: [f.linkedin],
      })),
      sameAs: [company.linkedin],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "KvK",
        value: company.kvk,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: company.name,
      inLanguage: "nl-NL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${interTight.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <a
          href="#inhoud"
          className="sr-only z-[60] rounded-md bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Naar de inhoud
        </a>
        <JsonLd data={organization} />
        <Navbar />
        <div id="inhoud" className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileBar />
        {/* Cookieloze statistieken van Vercel; werkt zodra Web Analytics in Vercel aan staat. */}
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

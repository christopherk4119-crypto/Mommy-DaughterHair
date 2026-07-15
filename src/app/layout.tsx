import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://www.mommyanddaughterhair.ca";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Mommy & Daughter Hair | African & Textured Hair Salon Calgary | Braids, Twists & Styling",
  description:
    "Calgary's trusted African and textured hair salon. Braids, twists, protective styles, coloring, and formal styling by Rachel — 15+ years experience. All hair types welcome. Book: 403-612-2981.",
  openGraph: {
    title: "Mommy & Daughter Hair | African & Textured Hair Salon Calgary | Braids, Twists & Styling",
    description:
      "Calgary's trusted African and textured hair salon. Braids, twists, protective styles, coloring, and formal styling by Rachel — 15+ years experience. All hair types welcome. Book: 403-612-2981.",
    url: BASE_URL,
    siteName: site.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mommy & Daughter Hair | African & Textured Hair Salon Calgary",
    description:
      "Braids, twists, protective styles, coloring, and formal styling by Rachel — 15+ years experience. All hair types welcome.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  image: `${BASE_URL}/images/gallery/hero.jpg`,
  telephone: site.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "71 Evansridge CT NW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3P 0N2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1743,
    longitude: -114.164,
  },
  url: BASE_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  areaServed: "Calgary, AB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-brand-cream)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

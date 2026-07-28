import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";

const title = "Hair Gallery Calgary | Mommy & Daughter Hair";
const description =
  "See braids, twists & protective style photos from Calgary's African & textured hair specialists. Book your appointment: 403-612-2981.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title,
    description,
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "/images/gallery/calgary-african-hair-stylist-curly-braid-styling-1.jpg",
        width: 736,
        height: 1232,
        alt: "Curly braid extension styling by Calgary African hair stylist Rachel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function GalleryPage() {
  return (
    <section className="bg-[var(--color-brand-cream)] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="Our Work"
          description="A look at braids, twists, protective styles, coloring, and more — real styles from Mommy & Daughter Hair in Calgary."
        />

        <GalleryGrid images={galleryImages} />

        <div className="text-center mt-12 space-y-4">
          <Link
            href="/contact#booking"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-plum-light)] transition-all shadow-lg"
          >
            Love what you see? Book your appointment today
          </Link>
          <p className="text-[var(--color-brand-charcoal)]/70">
            Not sure what to book?{" "}
            <Link href="/services" className="text-[var(--color-brand-plum)] font-semibold hover:underline">
              Explore our full service menu
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

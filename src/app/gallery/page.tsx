import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Hair Gallery | Braids, Twists & Protective Styles Calgary | Mommy & Daughter Hair",
  description:
    "See braids, twists, protective styles, coloring, and formal styling from Mommy & Daughter Hair — Calgary's African and textured hair specialists.",
};

export default function GalleryPage() {
  return (
    <section className="bg-[var(--color-brand-cream)] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Work"
          description="A look at braids, twists, protective styles, coloring, and more — real styles from Mommy & Daughter Hair in Calgary."
        />

        <GalleryGrid images={galleryImages} />

        <div className="text-center mt-12">
          <Link
            href="/contact#booking"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-plum-light)] transition-all shadow-lg"
          >
            Love what you see? Book your appointment today
          </Link>
        </div>
      </div>
    </section>
  );
}

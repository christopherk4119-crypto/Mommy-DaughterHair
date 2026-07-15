import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[var(--color-brand-cream)] py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Our Work"
          description="A look at braids, twists, protective styles, coloring, and more — real styles from Mommy & Daughter Hair in Calgary."
        />

        <GalleryGrid images={galleryImages} />

        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-plum-light)] transition-all shadow-lg"
          >
            Love what you see? Book your appointment today
          </a>
        </div>
      </div>
    </section>
  );
}

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

// Real photos live in /public/images/gallery/. Add more entries here as more
// photos come in — GalleryGrid.tsx renders one real <Image> per entry.
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/calgary-african-hair-stylist-cornrow-braid-closeup-1.jpg",
    alt: "Close-up of professional cornrow braid work by Calgary African hair stylist",
    category: "Braids",
  },
  {
    src: "/images/gallery/calgary-african-hair-stylist-braided-bun-updo-1.jpg",
    alt: "Braided bun updo protective style by Calgary African hair stylist",
    category: "Protective Styles",
  },
  {
    src: "/images/gallery/calgary-african-hair-stylist-curly-braid-styling-1.jpg",
    alt: "Curly braid extension styling by Calgary African hair stylist Rachel",
    category: "Braids",
  },
  {
    src: "/images/gallery/calgary-african-hair-stylist-braid-style-inspiration-collage-1.jpg",
    alt: "African braid style collection by Calgary hair stylist Rachel",
    category: "Braids",
  },
];

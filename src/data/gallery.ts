export type GalleryImage = {
  src?: string;
  alt: string;
  category: string;
};

// Real photos live in /public/images/gallery/. Entries without `src` are
// placeholder slots — replace by adding a photo to that folder and setting
// `src` (GalleryGrid.tsx renders a real <Image> whenever src is present).
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
  { alt: "Men's twist style by Rachel in Calgary", category: "Men's Twists" },
  { alt: "Natural hair texturing result at Calgary hair salon", category: "Texturing" },
  { alt: "Vibrant hair coloring by Mommy & Daughter Hair Calgary", category: "Coloring" },
  { alt: "Dimensional highlights styled in Calgary", category: "Highlights" },
  { alt: "Women's twist style for textured hair in Calgary", category: "Twists" },
  { alt: "Formal updo styling for a Calgary event", category: "Formal Styling" },
  { alt: "Scalp treatment and healthy hair care in Calgary", category: "Scalp Treatments" },
  { alt: "Kids protective braided style at Calgary salon", category: "Braids" },
];

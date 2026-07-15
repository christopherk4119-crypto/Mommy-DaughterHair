export type GalleryImage = {
  alt: string;
  category: string;
};

// Placeholder gallery slots — replace with real photos of Rachel's work in
// /public/images/gallery/ and swap the placeholder tiles in GalleryGrid.tsx
// for <Image> components pointing at the new files.
export const galleryImages: GalleryImage[] = [
  { alt: "Knotless box braids styled at Mommy & Daughter Hair, Calgary", category: "Braids" },
  { alt: "Protective style for natural African hair in Calgary", category: "Protective Styles" },
  { alt: "Men's twist style by Rachel in Calgary", category: "Men's Twists" },
  { alt: "Cornrow braids styled in NW Calgary", category: "Braids" },
  { alt: "Natural hair texturing result at Calgary hair salon", category: "Texturing" },
  { alt: "Vibrant hair coloring by Mommy & Daughter Hair Calgary", category: "Coloring" },
  { alt: "Dimensional highlights styled in Calgary", category: "Highlights" },
  { alt: "Women's twist style for textured hair in Calgary", category: "Twists" },
  { alt: "Formal updo styling for a Calgary event", category: "Formal Styling" },
  { alt: "Scalp treatment and healthy hair care in Calgary", category: "Scalp Treatments" },
  { alt: "Kids protective braided style at Calgary salon", category: "Braids" },
  { alt: "Client hair transformation at Mommy & Daughter Hair Calgary", category: "Styling" },
];

import type { LucideIcon } from "lucide-react";
import {
  Scissors,
  Sparkles,
  Waves,
  Palette,
  Wand2,
  Droplet,
  Crown,
  PartyPopper,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  badge?: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "professional-hair-styling",
    icon: Scissors,
    title: "Professional Hair Styling",
    description:
      "Expert cuts and styling for every hair type, tailored to you by Rachel's 15+ years of experience.",
  },
  {
    slug: "braids-protective-styles",
    icon: Crown,
    badge: "Specialty",
    title: "Braids & Protective Styles",
    description:
      "Calgary's go-to for African and textured hair — box braids, knotless braids, cornrows, and protective styles done with care.",
  },
  {
    slug: "twists",
    icon: Waves,
    badge: "Specialty",
    title: "Twists — Women & Men",
    description:
      "Beautiful, long-lasting twists for women and men. Rachel specializes in men's twists and styles too.",
  },
  {
    slug: "hair-texturing",
    icon: Sparkles,
    title: "Hair Texturing",
    description:
      "Professional texturing services that work with your natural hair to enhance shape, movement, and manageability.",
  },
  {
    slug: "hair-coloring",
    icon: Palette,
    title: "Hair Coloring",
    description:
      "Rich, vibrant color services applied with expert care for healthy, radiant results at every appointment.",
  },
  {
    slug: "highlights",
    icon: Wand2,
    title: "Highlights",
    description:
      "Dimensional highlights that brighten your look and complement your skin tone, from subtle to bold.",
  },
  {
    slug: "head-scalp-treatments",
    icon: Droplet,
    title: "Head & Scalp Treatments",
    description:
      "Nourishing scalp treatments that promote healthy hair growth and leave your scalp feeling refreshed.",
  },
  {
    slug: "formal-event-styling",
    icon: PartyPopper,
    title: "Formal & Event Styling",
    description:
      "Flawless styling for weddings, graduations, and special occasions — polished looks that turn heads.",
  },
];

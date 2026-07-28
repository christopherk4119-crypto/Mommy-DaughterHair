import type { Metadata } from "next";
import Booking from "@/components/contact/Booking";
import Contact from "@/components/contact/Contact";

const title = "Book an Appointment Calgary | Mommy & Daughter Hair";
const description =
  "Book braids, twists, coloring or styling with Rachel in NW Calgary. 71 Evansridge CT NW. Call or book online: 403-612-2981.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/team/rachel-hair-stylist-calgary-mommy-daughter-hair.jpg",
        width: 442,
        height: 960,
        alt: "Rachel, Calgary hair stylist and owner of Mommy & Daughter Hair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ContactPage() {
  return (
    <>
      <Booking />
      <Contact />
    </>
  );
}

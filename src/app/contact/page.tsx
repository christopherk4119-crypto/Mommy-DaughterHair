import type { Metadata } from "next";
import Booking from "@/components/contact/Booking";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Book an Appointment | Mommy & Daughter Hair | Calgary Hair Salon",
  description:
    "Book braids, twists, protective styles, coloring, or formal styling with Rachel at Mommy & Daughter Hair, 71 Evansridge CT NW, Calgary. Call 403-612-2981.",
};

export default function ContactPage() {
  return (
    <>
      <Booking />
      <Contact />
    </>
  );
}

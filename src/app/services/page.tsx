import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "@/components/services/ServicesGrid";
import CtaBanner from "@/components/ui/CtaBanner";
import { services } from "@/data/services";
import { site } from "@/data/site";

const title = "Hair Services Calgary | Mommy & Daughter Hair";
const description =
  "Braids, twists, protective styles, coloring, highlights & scalp treatments in Calgary. All hair types welcome. Book now: 403-612-2981.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    url: "/services",
    type: "website",
    images: [
      {
        url: "/images/gallery/calgary-african-hair-stylist-cornrow-braid-closeup-1.jpg",
        width: 736,
        height: 1600,
        alt: "Close-up of professional cornrow braid work by Calgary African hair stylist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-brand-cream)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Our Services"
            title="Hair Services in Calgary"
            description={`From protective braids and twists to color, texturing, and formal styling — every service is delivered with skill and care for African, textured, and all hair types across NW Calgary, including ${site.serviceAreas.slice(0, 3).join(", ")}, and surrounding communities.`}
          />

          <ServicesGrid services={services} />

          <p className="text-center text-[var(--color-brand-charcoal)]/70 mt-10">
            Want to see the results first?{" "}
            <Link href="/gallery" className="text-[var(--color-brand-plum)] font-semibold hover:underline">
              View our Calgary hair gallery
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service Is Right For You?"
        description="Call Rachel to talk through your hair goals, or send a booking request and she'll help you choose."
      />
    </>
  );
}

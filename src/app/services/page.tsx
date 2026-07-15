import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "@/components/services/ServicesGrid";
import CtaBanner from "@/components/ui/CtaBanner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Hair Services in Calgary | Braids, Twists & More | Mommy & Daughter Hair",
  description:
    "Braids, twists, protective styles, texturing, coloring, highlights, scalp treatments, and formal styling in Calgary. African & textured hair specialists — all hair types welcome.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-brand-cream)] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Hair Services in Calgary"
            description="From protective braids and twists to color, texturing, and formal styling — every service is delivered with skill and care for African, textured, and all hair types in NW Calgary."
          />

          <ServicesGrid services={services} />
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service Is Right For You?"
        description="Call Rachel to talk through your hair goals, or send a booking request and she'll help you choose."
      />
    </>
  );
}

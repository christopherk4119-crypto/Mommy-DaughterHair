import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "@/components/services/ServicesGrid";
import { services } from "@/data/services";

export default function ServicesTeaser() {
  const featured = services.slice(0, 4);

  return (
    <section id="services" className="bg-[var(--color-brand-cream)] py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Our Services"
          description="From protective braids and twists to color, texturing, and formal styling — every service is delivered with skill and care for African, textured, and all hair types in Calgary."
        />

        <ServicesGrid services={featured} />

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-plum-light)] transition-all shadow-lg"
          >
            View All Services <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

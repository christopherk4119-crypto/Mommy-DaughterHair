import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Meet Rachel" title="Meet Rachel" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-none">
            <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/team/rachel-hair-stylist-calgary-mommy-daughter-hair.jpg"
                alt="Rachel, Calgary hair stylist and owner of Mommy & Daughter Hair"
                fill
                sizes="(max-width: 1024px) 384px, 400px"
                className="object-cover object-top"
                priority
              />
            </div>
            <p className="text-center text-sm text-[var(--color-brand-charcoal)]/60 mt-3 font-medium">
              Rachel — Hair Stylist
            </p>
          </div>

          <div>
            <p className="text-lg text-[var(--color-brand-charcoal)]/80 leading-relaxed mb-4">
              {site.founder} has been styling hair for over {site.yearsExperience} years, building{" "}
              {site.name} into a welcoming Calgary salon known for expertise in African and textured
              hair. Her passion is helping every client — women, men, and children — feel confident
              with healthy, beautiful hair.
            </p>
            <p className="text-lg text-[var(--color-brand-charcoal)]/80 leading-relaxed">
              Whether it&apos;s intricate braids, protective styles, a fresh color, or formal event
              styling, {site.founder} brings skill, care, and a personal touch to every appointment at
              her salon in Evanston, NW Calgary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

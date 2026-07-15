import { UserRound } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Meet Rachel" title="Meet Rachel" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Placeholder for Rachel's photo — replace with a real photo at
              /public/images/gallery/rachel.jpg and swap this div for an <Image> */}
          <div className="order-1 lg:order-none">
            <div className="aspect-[4/5] max-w-sm mx-auto rounded-2xl bg-[var(--color-brand-cream-dark)] border-2 border-dashed border-[var(--color-brand-gold)] flex flex-col items-center justify-center gap-3">
              <UserRound className="w-14 h-14 text-[var(--color-brand-caramel)]/60" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-brand-caramel-dark)]/70">
                Add Rachel Photo
              </span>
            </div>
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

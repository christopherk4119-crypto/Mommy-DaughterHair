import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    emoji: "💛",
    title: "15+ Years of Experience",
    detail: "Rachel's expertise with every hair type, built over a decade and a half of styling in Calgary.",
  },
  {
    emoji: "👑",
    title: "African & Textured Hair Specialists",
    detail: "Braids, twists, and protective styles done right — Rachel's core specialty and passion.",
  },
  {
    emoji: "🤝",
    title: "Everyone Welcome",
    detail: "All hair types and backgrounds are welcome, including men's twists and styles.",
  },
  {
    emoji: "✨",
    title: "Personalized Care",
    detail: "Every client leaves feeling confident and beautiful, with a look made just for them.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[var(--color-brand-charcoal)] py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Calgary Trusts Mommy & Daughter Hair"
          dark
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-[var(--color-brand-gold)]/50 transition-colors text-center"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {reason.emoji}
              </div>
              <h3 className="font-heading text-lg font-bold text-[var(--color-brand-cream)] mb-2">
                {reason.title}
              </h3>
              <p className="text-[var(--color-brand-cream-dark)] text-sm">{reason.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-14 animate-fade-in-up">
      <span className="inline-block bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5">
        {eyebrow}
      </span>
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 ${
          dark ? "text-[var(--color-brand-cream)]" : "text-[var(--color-brand-charcoal)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            dark ? "text-[var(--color-brand-cream-dark)]" : "text-[var(--color-brand-charcoal)]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

import { Phone, CalendarCheck, BadgeCheck, Crown, Users, User } from "lucide-react";
import { site } from "@/data/site";

const trustPoints = [
  { icon: BadgeCheck, label: "15+ Years Experience" },
  { icon: Crown, label: "African & Textured Hair Specialists" },
  { icon: Users, label: "All Hair Types Welcome" },
  { icon: User, label: "Men's Styles Available" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      {/* Placeholder hero background — replace with a real photo of the salon or a styled look
          at /public/images/gallery/hero.jpg and swap this gradient for an <Image fill> */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-plum)] via-[var(--color-brand-plum-light)] to-[var(--color-brand-caramel-dark)]" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#FDF8F3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest mb-6">
            Evanston, NW Calgary
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-brand-cream)] leading-tight mb-6">
            Calgary&apos;s Home for Beautiful, Healthy Hair
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-brand-cream-dark)] mb-10 leading-relaxed">
            Specialists in African &amp; textured hair — braids, twists, protective styles &amp; more.
            All hair types welcome. 15+ years of expertise with Rachel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-xl"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Book Your Appointment
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[var(--color-brand-cream)] px-8 py-4 rounded-full font-semibold text-lg border-2 border-[var(--color-brand-cream)]/60 hover:bg-[var(--color-brand-cream)]/10 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-[var(--color-brand-cream)]">
                <point.icon className="w-5 h-5 text-[var(--color-brand-gold)]" aria-hidden="true" />
                <span className="text-sm font-medium">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

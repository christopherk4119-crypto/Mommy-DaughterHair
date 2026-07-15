import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { site } from "@/data/site";

type CtaBannerProps = {
  title: string;
  description: string;
};

export default function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="bg-[var(--color-brand-cream)] py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[var(--color-brand-plum)] to-[var(--color-brand-plum-light)] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-cream)] mb-4">
            {title}
          </h2>
          <p className="text-[var(--color-brand-cream-dark)] text-lg mb-8 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-charcoal)] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg"
            >
              <CalendarCheck className="w-5 h-5" aria-hidden="true" />
              Book Your Appointment
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-brand-plum)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-brand-cream)] transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

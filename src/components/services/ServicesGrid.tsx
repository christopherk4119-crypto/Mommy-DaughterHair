import type { Service } from "@/data/services";

export default function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div
          key={service.slug}
          className="group bg-white rounded-2xl p-6 border border-[var(--color-brand-gold)]/25 hover:border-[var(--color-brand-plum)] hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          {service.badge && (
            <span className="self-start bg-[var(--color-brand-plum)]/10 text-[var(--color-brand-plum)] text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
              {service.badge}
            </span>
          )}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-brand-plum)] to-[var(--color-brand-plum-light)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
            <service.icon className="w-6 h-6 text-[var(--color-brand-cream)]" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-xl font-bold text-[var(--color-brand-charcoal)] mb-2">
            {service.title}
          </h3>
          <p className="text-[var(--color-brand-charcoal)]/70 text-sm mb-6 flex-1">{service.description}</p>
          <a
            href="/contact#booking"
            className="text-[var(--color-brand-plum)] font-semibold text-sm hover:text-[var(--color-brand-plum-light)] transition-colors inline-flex items-center gap-1"
          >
            Book This Service <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      ))}
    </div>
  );
}

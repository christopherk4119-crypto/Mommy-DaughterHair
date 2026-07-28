import { Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BookingForm from "@/components/contact/BookingForm";
import { site } from "@/data/site";

export default function Booking() {
  return (
    <section id="booking" className="bg-[var(--color-brand-cream-dark)] py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="Book Now"
          title="Ready to Book Your Appointment?"
          description="Fill out the form below or call us directly — we can't wait to help you love your hair."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <BookingForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-[var(--color-brand-gold)]/30 hover:border-[var(--color-brand-plum)] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-plum)]/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[var(--color-brand-plum)]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm text-[var(--color-brand-charcoal)]/60">Call to book</div>
                <div className="font-heading text-lg font-bold text-[var(--color-brand-charcoal)]">{site.phone}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[var(--color-brand-gold)]/30">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-plum)]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[var(--color-brand-plum)]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm text-[var(--color-brand-charcoal)]/60">Visit us</div>
                <div className="font-heading text-lg font-bold text-[var(--color-brand-charcoal)]">{site.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[var(--color-brand-gold)]/30">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-plum)]/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[var(--color-brand-plum)]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm text-[var(--color-brand-charcoal)]/60 mb-1">Hours</div>
                <ul className="text-sm text-[var(--color-brand-charcoal)] space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span className="font-medium">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

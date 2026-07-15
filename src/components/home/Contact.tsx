import { Phone, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { site } from "@/data/site";

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.addressMapQuery)}&output=embed`;

  return (
    <section id="contact" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Visit Our Salon in NW Calgary"
          description="Conveniently located in Evanston, NW Calgary — easy to find, easy to love."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-2xl overflow-hidden border border-[var(--color-brand-gold)]/30 min-h-[320px]">
            <iframe
              title={`Map to ${site.name}`}
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-4 hover:text-[var(--color-brand-plum)] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-plum)]/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[var(--color-brand-plum)]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm text-[var(--color-brand-charcoal)]/60">Phone</div>
                <div className="font-heading text-xl font-bold text-[var(--color-brand-charcoal)]">{site.phone}</div>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-plum)]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[var(--color-brand-plum)]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm text-[var(--color-brand-charcoal)]/60">Address</div>
                <div className="font-heading text-xl font-bold text-[var(--color-brand-charcoal)]">{site.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-plum)]/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[var(--color-brand-plum)]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm text-[var(--color-brand-charcoal)]/60 mb-1">Hours</div>
                <ul className="text-[var(--color-brand-charcoal)] space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span className="font-medium">{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={site.social.instagram}
                aria-label="Mommy & Daughter Hair on Instagram"
                className="w-11 h-11 rounded-full bg-[var(--color-brand-plum)]/10 flex items-center justify-center hover:bg-[var(--color-brand-plum)] hover:text-white transition-colors text-[var(--color-brand-plum)]"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={site.social.facebook}
                aria-label="Mommy & Daughter Hair on Facebook"
                className="w-11 h-11 rounded-full bg-[var(--color-brand-plum)]/10 flex items-center justify-center hover:bg-[var(--color-brand-plum)] hover:text-white transition-colors text-[var(--color-brand-plum)]"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={site.social.tiktok}
                aria-label="Mommy & Daughter Hair on TikTok"
                className="w-11 h-11 rounded-full bg-[var(--color-brand-plum)]/10 flex items-center justify-center hover:bg-[var(--color-brand-plum)] hover:text-white transition-colors text-[var(--color-brand-plum)] text-xs font-bold"
              >
                TT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

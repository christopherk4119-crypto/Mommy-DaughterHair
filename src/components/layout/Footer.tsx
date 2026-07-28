import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-charcoal)] text-[var(--color-brand-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-3">{site.name}</h3>
            <p className="text-[var(--color-brand-cream-dark)] mb-4">{site.tagline}</p>
            <div className="flex items-center gap-4">
              <a
                href={site.social.instagram}
                aria-label="Mommy & Daughter Hair on Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand-plum)] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={site.social.facebook}
                aria-label="Mommy & Daughter Hair on Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand-plum)] transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={site.social.tiktok}
                aria-label="Mommy & Daughter Hair on TikTok"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand-plum)] transition-colors text-xs font-bold"
              >
                TT
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-[var(--color-brand-gold)] uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[var(--color-brand-cream-dark)] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-5 text-[var(--color-brand-gold)] uppercase tracking-widest">
              Find Us
            </h4>
            <a href={site.phoneHref} className="flex items-center gap-2 mb-3 text-[var(--color-brand-cream-dark)] hover:text-white transition-colors">
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              {site.phone}
            </a>
            <div className="flex items-start gap-2 text-[var(--color-brand-cream-dark)] mb-4">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{site.address}</span>
            </div>
            <ul className="text-sm text-[var(--color-brand-cream-dark)] space-y-1">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-sm text-[var(--color-brand-cream-dark)]">
          © 2026 {site.name} — Calgary, AB
        </div>
      </div>
    </footer>
  );
}

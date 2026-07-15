"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, Scissors } from "lucide-react";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[var(--color-brand-cream)]/95 backdrop-blur-sm shadow-sm border-b border-[var(--color-brand-gold)]/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link href="#hero" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-[var(--color-brand-plum)] to-[var(--color-brand-plum-light)] rounded-full flex items-center justify-center shadow-md">
              <Scissors className="text-[var(--color-brand-cream)] w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <span className="font-heading font-bold text-lg sm:text-xl text-[var(--color-brand-plum)] leading-tight">
              Mommy &amp; Daughter Hair
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-plum)] font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-[var(--color-brand-caramel-dark)] font-semibold text-sm hover:text-[var(--color-brand-plum)] transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href="#booking"
              className="bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[var(--color-brand-plum-light)] transition-colors shadow-md"
            >
              Book Now
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a href={site.phoneHref} aria-label={`Call ${site.phone}`} className="text-[var(--color-brand-plum)] p-2">
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              className="text-[var(--color-brand-charcoal)] p-2"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-brand-cream)] border-t border-[var(--color-brand-gold)]/40">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-plum)] font-medium py-3 border-b border-[var(--color-brand-gold)]/20 text-sm uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#booking"
              className="block text-center bg-[var(--color-brand-plum)] text-[var(--color-brand-cream)] px-6 py-3 rounded-full font-semibold mt-4 uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

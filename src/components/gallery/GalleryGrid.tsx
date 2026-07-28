"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-square rounded-xl overflow-hidden border border-[var(--color-brand-gold)]/30 hover:border-[var(--color-brand-plum)] transition-colors"
            aria-label={`View photo: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <span className="absolute bottom-0 inset-x-0 bg-[var(--color-brand-charcoal)]/80 text-[var(--color-brand-cream)] text-[11px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {image.category}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white p-2 hover:text-[var(--color-brand-gold)] transition-colors"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="w-7 h-7" aria-hidden="true" />
          </button>
          <div
            className="relative max-w-lg w-full aspect-square rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

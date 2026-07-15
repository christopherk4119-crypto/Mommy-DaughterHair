# Mommy & Daughter Hair

Multi-page Next.js (App Router) marketing site for Mommy & Daughter Hair, a Calgary hair salon
specializing in African and textured hair — braids, twists, protective styles, and more — led by
Rachel (15+ years experience), while welcoming clients of all hair types and backgrounds.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home (hero, services teaser, why choose us, Meet Rachel, booking CTA banner)
- `/services` — Full services grid
- `/gallery` — Full photo gallery
- `/contact` — Booking form + contact info, map, and hours

## Structure

- `src/data/` — business info, services, and gallery content, kept separate from markup
- `src/components/layout/` — `Header` (sticky nav + Book Now CTA) and `Footer`
- `src/components/home/` — Home page sections (Hero, ServicesTeaser, WhyChooseUs, About/Meet Rachel)
- `src/components/services/` — `ServicesGrid`, shared between the Home teaser and `/services`
- `src/components/gallery/` — `GalleryGrid` with lightbox, shared with `/gallery`
- `src/components/contact/` — `Booking` (form + info) and `Contact` (map + hours + socials), used on `/contact`
- `src/components/ui/` — shared `SectionHeading` and `CtaBanner`
- `src/app/sitemap.ts` / `src/app/robots.ts` — generate `/sitemap.xml` and `/robots.txt`
- `src/app/layout.tsx` — SEO metadata + `HairSalon` JSON-LD structured data

## Booking form

`BookingForm.tsx` posts to Formspree (`site.formspreeEndpoint` in `src/data/site.ts`). Sign up at
[formspree.io](https://formspree.io), create a form, and paste your endpoint into that file to
start receiving booking requests by email.

## Photos

The gallery and "Meet Rachel" section currently use labeled "Add Photo" placeholder tiles — no
stock photos were used. To add real photos:

1. Drop image files into `public/images/gallery/`
2. In `src/components/gallery/GalleryGrid.tsx` (used on `/gallery`), replace the placeholder tile
   markup with `next/image` `<Image>` components pointing at the new files
3. In `src/components/home/About.tsx`, replace the placeholder div with Rachel's photo
4. In `src/components/home/Hero.tsx`, replace the gradient background with a hero photo

## Deploying

Deploy-ready for [Vercel](https://vercel.com) — import the repo and deploy with default settings.

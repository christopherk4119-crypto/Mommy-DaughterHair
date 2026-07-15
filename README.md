# Mommy & Daughter Hair

Single-page Next.js (App Router) marketing site for Mommy & Daughter Hair, a Calgary hair salon
specializing in African and textured hair — braids, twists, protective styles, and more — led by
Rachel (15+ years experience), while welcoming clients of all hair types and backgrounds.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/data/` — business info, services, and gallery content, kept separate from markup
- `src/components/layout/` — `Header` (sticky nav + Book Now CTA) and `Footer`
- `src/components/home/` — one component per section (Hero, Services, Why Choose Us, Gallery,
  About/Meet Rachel, Booking, Contact)
- `src/app/page.tsx` — single page assembling all sections with anchor-based smooth-scroll nav
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
2. In `src/components/gallery/GalleryGrid.tsx`, replace the placeholder tile markup with
   `next/image` `<Image>` components pointing at the new files
3. In `src/components/home/About.tsx`, replace the placeholder div with Rachel's photo
4. In `src/components/home/Hero.tsx`, replace the gradient background with a hero photo

## Deploying

Deploy-ready for [Vercel](https://vercel.com) — import the repo and deploy with default settings.

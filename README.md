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

Real photos live in `public/images/gallery/` (4 real work photos) and `public/images/team/`
(Rachel's photo, used on the About/Meet Rachel section). The gallery still has 8 labeled
"Add Photo" placeholder tiles — no stock photos were used to fill them.

To add more real photos:

1. Drop the image file into `public/images/gallery/`, named
   `calgary-[service]-[description]-[number].jpg`
2. Add an entry to `src/data/gallery.ts` with `src`, descriptive `alt` text (mentioning Calgary +
   the specific service), and a `category` — `GalleryGrid.tsx` automatically renders a real
   `next/image` for any entry with `src`, or an "Add Photo" placeholder if `src` is omitted
3. In `src/components/home/Hero.tsx`, replace the gradient background with a hero photo if a
   landscape-oriented one becomes available (the current uploads are portrait/phone screenshots,
   not ideal for a wide hero banner)

Note: `calgary-african-hair-stylist-braid-style-inspiration-collage-1.jpg` and
`calgary-african-hair-stylist-curly-braid-styling-1.jpg` contain visible third-party watermarks
("Eleeji.com" and a TikTok "@braids.m" handle respectively) — they were included at the client's
explicit request, but are not confirmed to be Rachel's own work.

## Deploying

Deploy-ready for [Vercel](https://vercel.com) — import the repo and deploy with default settings.

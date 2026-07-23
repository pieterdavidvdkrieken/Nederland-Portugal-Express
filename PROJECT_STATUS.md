# Project Status — Nederland Portugal Express

**Last updated:** 2026-07-23
**Primary branch:** `main` (source of truth — PR #1 and PR #2 both merged, latest commit `9978a2c`)

## Current Status

**The website is production-ready code-wise and merged into `main`.** It
covers eight pages, in all seven languages, with the full cinematic visual
system described below, real SEO metadata (Open Graph/Twitter Card tags,
a branded OG image, structured data, sitemap, robots.txt, canonical +
hreflang), and route/locale-level code splitting for performance. Verified
on a fresh clone of `main`: `tsc --noEmit`, `vite build`, and `oxlint` all
pass with zero errors or warnings. A full Playwright audit found zero
broken links, zero missing assets, and zero console/network errors across
all 56 page × language combinations.

**The only remaining blockers to going live are business inputs, not
code:** a production domain is not yet connected (SEO files currently
point at a placeholder — see **Domain Configuration**), the real business
phone/email/social links haven't been supplied yet (see **Contact
Details**), and the two forms (Contact, Quote Request) do not yet submit
to a real backend. Once those are provided/decided, the site can go live
as-is.

## Completed Features

- **Pages:** Home, About Us, Services, Secure Storage, Vehicle Logistics,
  International Transport & Relocation, Contact, Quote Request (multi-step
  wizard), 404.
- **Design system:** black / deep ink navy / champagne gold palette,
  Cormorant Garamond + Bodoni Moda + Manrope type system, reusable UI
  primitives (buttons, section headings, icon tiles, stat band, testimonial,
  CTA banner, page hero).
- **Cinematic UX:** word-by-word hero reveal, scroll-linked parallax on
  every page hero, Lenis smooth scroll, route-change page transitions,
  session preloader, desktop custom cursor, magnetic CTA buttons, animated
  stat counters.
- **Multilingual support:** English, Dutch, German, French, Spanish,
  Portuguese, Italian — full translations (not scaffolding) via
  `react-i18next`, `/:lang/*` routing, browser-language auto-detection,
  `localStorage` preference, and a language switcher in the nav, mobile
  menu and footer.
- **Responsive:** verified at desktop and mobile breakpoints via Playwright.
- **Quality gates:** `tsc --noEmit`, `vite build`, and `oxlint` all pass
  clean; zero console/runtime errors across a full route + language sweep,
  re-verified on a fresh clone of `main` after merge.
- **Project documentation:** `PROJECT_STATUS.md` (this file),
  `ROADMAP.md` (long-term vision), `BRAND_MANIFESTO.md` (core brand
  philosophy) — all version-controlled alongside the code.
- **White/paper design layer:** genuine white/paper section backgrounds
  (not just text) with light-mode headings, icon tiles and testimonials —
  used on the Home/About testimonial bands and the Vehicle Logistics
  features grid, so black/gold/navy/white are all real section colors.
- **SEO:** `MovingCompany` JSON-LD structured data (with url/image/logo), a
  generated `sitemap.xml` (56 URLs: 8 pages × 7 languages), `robots.txt`,
  per-page canonical + hreflang alternate link tags, `noindex` on the 404
  page, and full Open Graph + Twitter Card tags (static in `index.html`
  for non-JS crawlers, kept in sync dynamically per page for JS-executing
  ones) backed by a brand-consistent generated `og-image.png`.
- **Performance:** every page is route-level code-split (`React.lazy` +
  `Suspense`), and locale JSON bundles load on demand per language
  (English preloaded, the other six stream in as their own ~8 kB gzip
  chunk only when selected) instead of bundling all seven eagerly — this
  removed the earlier production build's chunk-size warning entirely.
- **Production polish:** centralized contact details into
  `src/data/contact.ts`; real `tel:`/`mailto:` links; footer no longer
  renders dead `href="#"` social links (only shows an icon once a real
  URL is configured); a `favicon.ico` fallback alongside the SVG favicon;
  a base-layer CSS reset so the browser's default blue/underlined link
  style can never leak through on a future link.
- **Version control hygiene:** PR #1 and PR #2 both merged into `main`;
  working tree and all branches verified clean with no uncommitted or
  unpushed changes at each checkpoint; `main` itself rebuilt from a fresh
  clone to confirm it is genuinely deployable, not just the working copy.

## Pending Tasks

Everything below requires a business decision or asset from the client —
none of it is blocked on further engineering:

- [ ] Wire Contact and Quote Request forms to a real backend (see
      **Contact Form Integration Status** below) — currently simulated.
- [ ] Choose and configure production hosting (Vercel, Netlify, or a
      TransIP-hosted static/Node target).
- [ ] Point the production domain at the chosen host via TransIP DNS (see
      **Domain Configuration** below), and update the placeholder origin
      (`https://www.nederlandportugalexpress.com`, in `src/i18n/siteUrl.ts`
      and `scripts/generate-sitemap.mjs`) to the real domain, then rerun
      `npm run generate:sitemap`.
- [ ] Supply real business contact details — phone number(s), email,
      Instagram/LinkedIn URLs — to replace the placeholders in
      `src/data/contact.ts` (see **Contact Details**).
- [ ] Optionally supply a street-level office address if the brand wants
      more than the current city-level, by-appointment copy.
- [ ] Source or commission real photography/video if the brand later wants
      imagery beyond the current custom CSS/SVG visual language.

## Contact Details

Centralized in `src/data/contact.ts`. Currently placeholder values:

| Field | Current value | Status |
|---|---|---|
| Phone (NL) | `+31 20 123 4567` | Placeholder |
| Phone (PT) | `+351 21 456 7890` | Placeholder |
| Email | `concierge@npexpress.com` | Placeholder |
| Instagram | *(empty — icon hidden until set)* | Needs real URL |
| LinkedIn | *(empty — icon hidden until set)* | Needs real URL |

The same phone/email also appear in the `MovingCompany` JSON-LD in
`index.html` (kept in sync manually since that file is static HTML, not
JS) — update both places together.

## GitHub Branch Information

| Branch | Role | Status |
|---|---|---|
| `main` | Production source of truth | Up to date — contains the full website, all pages, SEO, performance and production-polish work as of commit `9978a2c` |
| `claude/npe-luxury-website-design-bfwdg3` | Feature branch | Fully merged into `main` via PR #1 and PR #2; will be restarted from `main` again if further work is requested, per this repo's workflow for a branch whose PR has already merged |

**History:** PR #1 introduced the entire initial website build (merged as
`de09a5b`). PR #2 added the Vehicle Logistics page, repositioned
International Removals as International Transport & Relocation, and added
the SEO/performance/production-polish work described above (merged as
`9978a2c`). Both are closed and merged; `main` is current.

## Technology Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript, built with Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion, Lenis (smooth scroll) |
| Routing | React Router v7, locale-prefixed (`/:lang/*`) |
| i18n | react-i18next / i18next, 7 JSON locale bundles loaded on demand via `i18next-resources-to-backend` |
| Icons | lucide-react |
| Fonts | Cormorant Garamond, Bodoni Moda, Manrope — self-hosted via `@fontsource` (no external Google Fonts dependency) |
| Linting | oxlint |
| Package manager | npm |

## Brand Guidelines

**Palette**

| Token | Hex | Usage |
|---|---|---|
| Noir | `#07090d` | Primary background |
| Noir Soft | `#0c1017` | Secondary background / footer |
| Ink | `#0a1220` | Deep navy section background |
| Ink Light / Lighter | `#101c30` / `#16233a` | Navy accents, cards |
| Champagne | `#cbaa6b` | Primary accent (borders, icons, links) |
| Champagne Light | `#e3cd9c` | Gold highlights, gradient top |
| Champagne Deep | `#a8823f` | Gold gradient shadow |
| Ivory | `#f3efe6` | Primary text on dark |
| Mist / Mist Dim | `#9aa5b5` / `#6b7488` | Secondary / tertiary text |

No bright logistics colors (orange, red, blue-branding) are used anywhere
in the system — the palette is strictly black, deep ink navy and champagne
gold, per brand direction.

**Typography**

- **Bodoni Moda** — high-contrast editorial serif reserved for the hero's
  emotional statement line and other "big moment" headlines. Used sparingly.
- **Cormorant Garamond** — primary display serif for section headings,
  page titles, quotes.
- **Manrope** — body copy, navigation, UI labels, form fields, light weight
  by default with wide letter-spacing on uppercase labels.

**Tone:** discretion, precision, craftsmanship — never loud. Kickers are
small-caps, wide-tracked gold labels; dividers use a thin gold hairline
with a rotated-diamond ornament; imagery is entirely custom CSS/SVG (no
stock photography) to keep the visual language exclusive and consistent.

See `BRAND_MANIFESTO.md` for the underlying brand philosophy and
`ROADMAP.md` for how the brand and product evolve from here.

## Deployment Instructions

The project is a static-buildable Vite SPA — any static host or Node
static-file server works.

1. **Install & build**
   ```bash
   npm install
   npm run build
   ```
   Output is written to `dist/`.

2. **SPA fallback routing is required.** Because routes are client-side
   (`/:lang/about`, etc.), the host must rewrite all unmatched paths to
   `/index.html`:
   - **Vercel / Netlify:** works out of the box with their default SPA
     rewrite rule (add a `rewrites`/`redirects` rule to `/index.html` with
     status 200 if it isn't automatic).
   - **Nginx:** `try_files $uri /index.html;`
   - **Static bucket + CDN (e.g. behind a TransIP VPS):** configure the web
     server (Nginx/Apache) with the same catch-all rewrite.

3. **Environment:** no environment variables or server-side secrets are
   required for the current build — it is fully static.

4. **Preview locally before shipping:**
   ```bash
   npm run preview
   ```

## Domain Configuration (TransIP)

The production domain has **not yet been connected**. `robots.txt`,
`sitemap.xml`, canonical tags and hreflang tags currently all point at a
placeholder origin (`https://www.nederlandportugalexpress.com`, set in
`src/i18n/siteUrl.ts` and `scripts/generate-sitemap.mjs`) — update both
once the real domain is chosen, then rerun `npm run generate:sitemap`.

Once hosting is chosen, point the TransIP-registered domain at it via the
TransIP Control Panel → **Domains** → select the domain → **DNS**:

- **If hosting on Vercel/Netlify (recommended for a static SPA):**
  - Add the `A`/`ALIAS` record(s) or `CNAME` the host's dashboard provides
    for the apex domain, and a `CNAME` for `www` pointing at the host's
    edge (e.g. `cname.vercel-dns.com.`).
  - Add the domain in the hosting provider's dashboard and verify it there
    once DNS propagates.
- **If self-hosting on a TransIP VPS:**
  - Add an `A` record for the apex domain (and `AAAA` if IPv6 is enabled)
    pointing to the VPS's IP address.
  - Add a `CNAME` for `www` pointing to the apex domain, or a matching `A`
    record.
  - Provision TLS (e.g. via Let's Encrypt/Certbot) on the VPS.
- DNS propagation via TransIP is typically fast but allow up to 24 hours
  for full global propagation.

This section should be updated with the actual records once a hosting
decision is made and the domain is live.

## Contact Form Integration Status

**Not yet connected to a backend.** Both the Contact page form and the
Quote Request wizard currently:

- Validate input client-side (required fields, email/tel types).
- On submit, simulate a network call (`setTimeout`) and show a success
  state — no data is actually sent anywhere yet.

To go live, these need to be wired to a real destination, for example:

- A transactional email service (e.g. Resend, Postmark, SendGrid) via a
  small serverless function, or
- A form backend (e.g. Formspree, Basin), or
- A CRM/inbox integration if the client wants leads to land directly in a
  sales tool.

This is tracked as a pending task above and is the main blocker before the
site can accept real client enquiries.

# Project Status — Nederland Portugal Express

**Last updated:** 2026-07-22
**Primary branch:** `main` (source of truth — PR #1 merged)
**This update's branch:** `claude/npe-luxury-website-design-bfwdg3` (restarted from `main`, per repo workflow, to carry this documentation change)
**Latest commit on `main` at time of writing:** `de09a5b67ebad0ad236266f5746c5cb5e5004cfe`
**Commit introducing this documentation update:** the current tip of `claude/npe-luxury-website-design-bfwdg3` — run `git log -1` or see the branch on GitHub for the exact hash (a commit cannot cleanly reference its own final hash inside its own content).

## Current Status

**The website build is complete and merged into `main`.** The marketing
site is a fully functional client-side React single-page application
covering all seven pages, in seven languages, with the full cinematic
visual system described below. `main` was verified against a clean clone:
`tsc --noEmit`, `vite build`, and `oxlint` all pass without errors.

The project is **feature-complete but not yet live** — it has not been
deployed to production hosting, no domain is connected, and the two forms
(Contact, Quote Request) do not yet submit to a real backend. These are the
three remaining blockers before the site can serve real clients (see
**Pending Tasks**).

## Completed Features

- **Pages:** Home, About Us, Services, Secure Storage, International
  Removals, Contact, Quote Request (multi-step wizard), 404.
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
- **Version control hygiene:** PR #1 ("Build ultra-luxury Nederland
  Portugal Express website (multilingual)") merged into `main`; working
  tree and all branches verified clean with no uncommitted or unpushed
  changes at each checkpoint.

## Pending Tasks

- [ ] Wire Contact and Quote Request forms to a real backend (see
      **Contact Form Integration Status** below) — currently simulated.
- [ ] Choose and configure production hosting (Vercel, Netlify, or a
      TransIP-hosted static/Node target).
- [ ] Point the production domain at the chosen host via TransIP DNS (see
      **Domain Configuration** below).
- [ ] Replace placeholder contact details (phone numbers, email, office
      copy) with the client's real information.
- [ ] Source or commission real photography/video if the brand later wants
      imagery beyond the current custom CSS/SVG visual language.
- [ ] Optional: code-split translation bundles / lazy-load non-default
      languages to shrink the initial JS payload (currently ~646 KB raw /
      ~199 KB gzipped, flagged by the Vite build as a chunk-size warning).
- [ ] Review and merge the documentation update in this branch (this
      PROJECT_STATUS.md revision plus ROADMAP.md and BRAND_MANIFESTO.md)
      into `main`, if a pull request is requested.

## GitHub Branch Information

| Branch | Role | Status |
|---|---|---|
| `main` | Production source of truth | Contains the full merged website as of commit `de09a5b` |
| `claude/npe-luxury-website-design-bfwdg3` | Working branch for this documentation update | Restarted from `main` after PR #1 merged, per repo policy that a merged branch is not reused for further commits |

**History:** PR #1 (`claude/npe-luxury-website-design-bfwdg3` → `main`)
introduced the entire website build — the initial luxury site, the
ultra-luxury/cinematic + multilingual upgrade, and the first version of
this status document — and was merged as commit `de09a5b`. This
documentation update follows the same branch name (reset to `main`'s tip
first, since the previous history was already merged) so any new pull
request opened from it is a **new** PR, not a reopening of #1.

## Technology Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript, built with Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion, Lenis (smooth scroll) |
| Routing | React Router v7, locale-prefixed (`/:lang/*`) |
| i18n | react-i18next / i18next, 7 static JSON locale bundles |
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

The production domain has **not yet been connected**. Once hosting is
chosen, point the TransIP-registered domain at it via the TransIP Control
Panel → **Domains** → select the domain → **DNS**:

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

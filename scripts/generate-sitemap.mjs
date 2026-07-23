#!/usr/bin/env node
// Regenerates public/sitemap.xml from the route + language list below.
// Run with: node scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// Keep in sync with src/i18n/siteUrl.ts
const SITE_URL = 'https://www.nederlandportugalexpress.com'

const LANGS = ['en', 'nl', 'de', 'fr', 'es', 'pt', 'it']

const PAGES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about', priority: '0.7', changefreq: 'monthly' },
  { path: 'services', priority: '0.9', changefreq: 'monthly' },
  { path: 'secure-storage', priority: '0.8', changefreq: 'monthly' },
  { path: 'vehicle-logistics', priority: '0.8', changefreq: 'monthly' },
  { path: 'international-relocation', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.6', changefreq: 'yearly' },
  { path: 'quote-request', priority: '0.9', changefreq: 'yearly' },
]

const urlFor = (lang, path) => `${SITE_URL}/${lang}${path ? `/${path}` : ''}`

const today = new Date().toISOString().slice(0, 10)

const urls = PAGES.flatMap((page) =>
  LANGS.map((lang) => {
    const alternates = LANGS.map(
      (altLang) => `      <xhtml:link rel="alternate" hreflang="${altLang}" href="${urlFor(altLang, page.path)}" />`,
    ).join('\n')
    const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en', page.path)}" />`
    return `  <url>
    <loc>${urlFor(lang, page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
${xDefault}
  </url>`
  }),
)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`

const outPath = resolve(dirname(fileURLToPath(import.meta.url)), '../public/sitemap.xml')
writeFileSync(outPath, xml)
console.log(`Wrote ${outPath} (${PAGES.length} pages x ${LANGS.length} languages = ${PAGES.length * LANGS.length} URLs)`)

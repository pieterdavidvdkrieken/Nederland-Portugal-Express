import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { LANG_CODES, DEFAULT_LANG } from '../i18n/languages'
import { SITE_URL } from '../i18n/siteUrl'

function upsertLink(rel: string, hreflang: string | null, href: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let link = document.querySelector<HTMLLinkElement>(selector)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    if (hreflang) link.setAttribute('hreflang', hreflang)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
  return link
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attr, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
  return meta
}

export function usePageMeta(key: string, options: { noindex?: boolean } = {}) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const title = t(`meta.${key}.title`)
    const desc = t(`meta.${key}.desc`, { defaultValue: '' })
    document.title = title

    upsertMeta('name', 'description', desc)
    // og:title/description/url are also set as static fallbacks in
    // index.html for crawlers that don't execute JS — this keeps them in
    // sync for anything that does (Google, some LinkedIn/Slack fetches).
    upsertMeta('property', 'og:title', title)
    if (desc) upsertMeta('property', 'og:description', desc)
    upsertMeta('name', 'twitter:title', title)
    if (desc) upsertMeta('name', 'twitter:description', desc)

    const robots = upsertMeta('name', 'robots', options.noindex ? 'noindex, nofollow' : 'index, follow')

    // Strip the /:lang prefix to get the language-agnostic path, e.g. /en/about -> /about
    const rest = location.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '')
    const pathFor = (lang: string) => `${SITE_URL}/${lang}${rest}`
    const currentUrl = pathFor(i18n.language || DEFAULT_LANG)

    upsertLink('canonical', null, currentUrl)
    upsertMeta('property', 'og:url', currentUrl)

    const alternateLinks = LANG_CODES.map((lang) => upsertLink('alternate', lang, pathFor(lang)))
    const xDefaultLink = upsertLink('alternate', 'x-default', pathFor(DEFAULT_LANG))

    return () => {
      alternateLinks.forEach((link) => link.remove())
      xDefaultLink.remove()
      robots.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, i18n.language, location.pathname, options.noindex])
}

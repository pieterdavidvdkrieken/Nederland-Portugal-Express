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

export function usePageMeta(key: string) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const title = t(`meta.${key}.title`)
    const desc = t(`meta.${key}.desc`, { defaultValue: '' })
    document.title = title

    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    if (desc) meta.setAttribute('content', desc)

    // Strip the /:lang prefix to get the language-agnostic path, e.g. /en/about -> /about
    const rest = location.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '')
    const pathFor = (lang: string) => `${SITE_URL}/${lang}${rest}`

    upsertLink('canonical', null, pathFor(i18n.language || DEFAULT_LANG))

    const alternateLinks = LANG_CODES.map((lang) => upsertLink('alternate', lang, pathFor(lang)))
    const xDefaultLink = upsertLink('alternate', 'x-default', pathFor(DEFAULT_LANG))

    return () => {
      alternateLinks.forEach((link) => link.remove())
      xDefaultLink.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, i18n.language, location.pathname])
}

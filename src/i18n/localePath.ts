import { useParams } from 'react-router-dom'
import { DEFAULT_LANG, isLangCode } from './languages'

export function useLang() {
  const { lang } = useParams()
  return isLangCode(lang) ? lang : DEFAULT_LANG
}

export function localizePath(lang: string, to: string) {
  if (/^https?:\/\//.test(to) || to.startsWith('#') || to.startsWith('mailto:') || to.startsWith('tel:')) return to
  const clean = to.startsWith('/') ? to : `/${to}`
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`
}

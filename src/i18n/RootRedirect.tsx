import { Navigate } from 'react-router-dom'
import { detectBrowserLang, isLangCode, LANG_STORAGE_KEY } from './languages'

export default function RootRedirect() {
  const stored = typeof window !== 'undefined' ? window.localStorage.getItem(LANG_STORAGE_KEY) : null
  const lang = isLangCode(stored ?? undefined) ? stored! : detectBrowserLang()
  return <Navigate to={`/${lang}`} replace />
}

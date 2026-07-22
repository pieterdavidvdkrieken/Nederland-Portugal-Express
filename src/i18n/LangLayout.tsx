import { useEffect } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { detectBrowserLang, isLangCode, LANG_STORAGE_KEY } from './languages'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'
import PageTransition from '../components/layout/PageTransition'

export default function LangLayout() {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (!isLangCode(lang)) return
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
  }, [lang, i18n])

  if (!isLangCode(lang)) {
    return <Navigate to={`/${detectBrowserLang()}`} replace />
  }

  return (
    <div className="flex min-h-screen flex-col bg-noir">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

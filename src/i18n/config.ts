import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import en from './locales/en.json'
import { DEFAULT_LANG, LANG_CODES } from './languages'

type LocaleModule = { default: Record<string, unknown> }

const lazyLocales: Record<string, () => Promise<LocaleModule>> = {
  nl: () => import('./locales/nl.json'),
  de: () => import('./locales/de.json'),
  fr: () => import('./locales/fr.json'),
  es: () => import('./locales/es.json'),
  pt: () => import('./locales/pt.json'),
  it: () => import('./locales/it.json'),
}

i18n
  .use(
    resourcesToBackend((language: string) => {
      if (language === DEFAULT_LANG) return Promise.resolve(en)
      return (lazyLocales[language] ?? lazyLocales.nl)().then((mod) => mod.default)
    }),
  )
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANG,
    fallbackLng: DEFAULT_LANG,
    supportedLngs: LANG_CODES,
    // English is preloaded synchronously so the very first paint never
    // has to suspend; every other locale streams in as its own small
    // chunk only when actually selected. partialBundledLanguages is
    // required so i18next still asks the backend for languages that
    // aren't part of the preloaded `resources` bundle above.
    resources: { [DEFAULT_LANG]: { translation: en } },
    partialBundledLanguages: true,
    interpolation: { escapeValue: false },
    returnObjects: true,
    react: { useSuspense: true },
  })

export default i18n

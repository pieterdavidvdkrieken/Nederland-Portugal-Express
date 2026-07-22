export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
] as const

export type LangCode = (typeof LANGUAGES)[number]['code']

export const LANG_CODES = LANGUAGES.map((l) => l.code) as LangCode[]

export const DEFAULT_LANG: LangCode = 'en'

export const LANG_STORAGE_KEY = 'npe-lang'

export const isLangCode = (value: string | undefined): value is LangCode =>
  !!value && (LANG_CODES as string[]).includes(value)

export const detectBrowserLang = (): LangCode => {
  if (typeof navigator === 'undefined') return DEFAULT_LANG
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]
  for (const candidate of candidates) {
    const code = candidate?.slice(0, 2).toLowerCase()
    if (isLangCode(code)) return code
  }
  return DEFAULT_LANG
}

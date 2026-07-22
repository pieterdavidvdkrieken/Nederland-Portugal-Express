import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function usePageMeta(key: string) {
  const { t, i18n } = useTranslation()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, i18n.language])
}

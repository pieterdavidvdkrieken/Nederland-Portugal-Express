import { useTranslation } from 'react-i18next'
import type { LucideIcon } from 'lucide-react'
import { serviceIcons, serviceLinks } from '../data/services'

export interface ServiceItem {
  slug: string
  title: string
  shortTitle: string
  summary: string
  description: string
  points: string[]
  icon: LucideIcon
  link?: string
}

interface RawServiceItem {
  slug: string
  title: string
  shortTitle: string
  summary: string
  description: string
  points: string[]
}

export function useServices(): ServiceItem[] {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as RawServiceItem[]
  return items.map((item) => ({
    ...item,
    icon: serviceIcons[item.slug],
    link: serviceLinks[item.slug],
  }))
}

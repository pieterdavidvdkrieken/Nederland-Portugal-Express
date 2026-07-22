import {
  Thermometer,
  Camera,
  Fingerprint,
  FlameKindling,
  ShieldCheck,
  Clock,
  Car,
  Anchor,
  Palette,
  Wine,
  Boxes,
  Building2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import CTASection from '../components/ui/CTASection'
import Divider from '../components/ui/Divider'
import { usePageMeta } from '../hooks/usePageMeta'

const featureIcons = [Camera, Fingerprint, Thermometer, FlameKindling, ShieldCheck, Clock]
const categoryIcons = [Car, Anchor, Palette, Wine, Boxes, Building2]

export default function SecureStorage() {
  const { t } = useTranslation()
  usePageMeta('secureStorage')
  const features = t('secureStorage.features.items', { returnObjects: true }) as { title: string; desc: string }[]
  const categories = t('secureStorage.categories.items', { returnObjects: true }) as string[]

  return (
    <div>
      <PageHero
        kicker={t('secureStorage.hero.kicker')}
        title={t('secureStorage.hero.title')}
        description={t('secureStorage.hero.desc')}
        crumb={t('nav.secureStorage')}
      />

      {/* FEATURES */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            kicker={t('secureStorage.features.kicker')}
            title={t('secureStorage.features.title')}
            description={t('secureStorage.features.desc')}
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="h-full card-glass p-8">
                  <IconTile icon={featureIcons[i]} />
                  <h3 className="mt-6 font-display text-xl text-ivory">{f.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHAT WE STORE */}
      <section className="relative border-y border-champagne/10 bg-ink py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
                {t('secureStorage.categories.kicker')}
              </p>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                {t('secureStorage.categories.title')}
              </h2>
              <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
                {t('secureStorage.categories.desc')}
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((label, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 card-glass px-6 py-5 transition-colors duration-300 hover:border-champagne/40"
                  >
                    <IconTile icon={categoryIcons[i]} size="sm" />
                    <span className="text-sm font-light text-ivory/90">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              {t('secureStorage.process.kicker')}
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              {t('secureStorage.process.title')}
            </h2>
            <Divider className="mt-7" />
            <p className="mt-7 text-base font-light leading-relaxed text-mist">{t('secureStorage.process.desc')}</p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

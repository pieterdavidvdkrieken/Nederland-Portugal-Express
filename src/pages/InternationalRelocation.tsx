import { ClipboardCheck, PackagePlus, FileCheck2, Truck, House, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import CTASection from '../components/ui/CTASection'
import RouteMap from '../components/ui/RouteMap'
import { usePageMeta } from '../hooks/usePageMeta'

const stepIcons = [ClipboardCheck, PackagePlus, FileCheck2, Truck, House]

export default function InternationalRelocation() {
  const { t } = useTranslation()
  usePageMeta('removals')
  const included = t('removals.included.items', { returnObjects: true }) as string[]
  const steps = t('removals.process.steps', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <div>
      <PageHero
        kicker={t('removals.hero.kicker')}
        title={t('removals.hero.title')}
        description={t('removals.hero.desc')}
        crumb={t('nav.removals')}
      />

      {/* WHAT'S INCLUDED */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              {t('removals.included.kicker')}
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              {t('removals.included.title')}
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
              {t('removals.included.desc')}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 card-glass px-5 py-4 text-sm font-light text-ivory/85"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative border-y border-champagne/10 bg-ink py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            kicker={t('removals.process.kicker')}
            title={t('removals.process.title')}
            description={t('removals.process.desc')}
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="text-center">
                  <div className="flex justify-center">
                    <IconTile icon={stepIcons[i]} size="lg" />
                  </div>
                  <p className="mt-5 font-display text-champagne/60 text-sm">{`0${i + 1}`}</p>
                  <h3 className="mt-1 font-display text-lg text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CORRIDOR */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="card-glass p-10 sm:p-14">
              <RouteMap className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              {t('removals.corridor.kicker')}
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              {t('removals.corridor.title')}
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
              {t('removals.corridor.desc')}
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

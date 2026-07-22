import { Truck, Radar, Award, FileCheck2, Layers, ShieldCheck, Gauge, Car, Bike, Trophy, Building2, ClipboardCheck, Route as RouteIcon, PackageCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import CTASection from '../components/ui/CTASection'
import Divider from '../components/ui/Divider'
import { usePageMeta } from '../hooks/usePageMeta'

const featureIcons = [Truck, ShieldCheck, Radar, Award, FileCheck2, Layers]
const categoryIcons = [Gauge, Car, Bike, Layers, Trophy, Building2]
const processIcons = [ClipboardCheck, RouteIcon, Truck, PackageCheck]

export default function VehicleLogistics() {
  const { t } = useTranslation()
  usePageMeta('vehicleLogistics')
  const features = t('vehicleLogistics.features.items', { returnObjects: true }) as { title: string; desc: string }[]
  const categories = t('vehicleLogistics.categories.items', { returnObjects: true }) as string[]
  const steps = t('vehicleLogistics.process.steps', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <div>
      <PageHero
        kicker={t('vehicleLogistics.hero.kicker')}
        title={t('vehicleLogistics.hero.title')}
        description={t('vehicleLogistics.hero.desc')}
        crumb={t('nav.vehicleLogistics')}
      />

      {/* FEATURES — white/paper section */}
      <section className="relative bg-paper py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            kicker={t('vehicleLogistics.features.kicker')}
            title={t('vehicleLogistics.features.title')}
            description={t('vehicleLogistics.features.desc')}
            light
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <StaggerItem key={f.title}>
                <div className="h-full card-paper bg-white/40 p-8">
                  <IconTile icon={featureIcons[i]} tone="light" />
                  <h3 className="mt-6 font-display text-xl text-noir">{f.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ink/70">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHAT WE MOVE */}
      <section className="relative border-y border-champagne/10 bg-ink py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
                {t('vehicleLogistics.categories.kicker')}
              </p>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                {t('vehicleLogistics.categories.title')}
              </h2>
              <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
                {t('vehicleLogistics.categories.desc')}
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
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            kicker={t('vehicleLogistics.process.kicker')}
            title={t('vehicleLogistics.process.title')}
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="text-center">
                  <div className="flex justify-center">
                    <IconTile icon={processIcons[i]} size="lg" />
                  </div>
                  <p className="mt-5 font-display text-champagne/60 text-sm">{`0${i + 1}`}</p>
                  <h3 className="mt-1 font-display text-lg text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.3}>
            <Divider className="mt-16" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

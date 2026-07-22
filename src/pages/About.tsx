import { ShieldCheck, EyeOff, Hammer, Target } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import StatBand from '../components/ui/StatBand'
import Testimonial from '../components/ui/Testimonial'
import CTASection from '../components/ui/CTASection'
import Divider from '../components/ui/Divider'
import { usePageMeta } from '../hooks/usePageMeta'

const pillarIcons = [ShieldCheck, EyeOff, Hammer, Target]

export default function About() {
  const { t } = useTranslation()
  usePageMeta('about')
  const pillars = t('about.pillars.items', { returnObjects: true }) as { title: string; desc: string }[]
  const stats = t('about.stats', { returnObjects: true }) as { value: string; label: string }[]

  return (
    <div>
      <PageHero
        kicker={t('about.hero.kicker')}
        title={t('about.hero.title')}
        description={t('about.hero.desc')}
        crumb={t('nav.about')}
      />

      {/* STORY */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              {t('about.story.kicker')}
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              {t('about.story.title')}
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist">{t('about.story.p1')}</p>
            <p className="mt-5 text-base font-light leading-relaxed text-mist">{t('about.story.p2')}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] card-glass p-2">
              <div className="relative h-full w-full overflow-hidden border border-champagne/10">
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-noir-soft to-noir" />
                <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(203,170,107,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(203,170,107,0.6)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-champagne/[0.09] blur-[100px]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-6 p-10 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-champagne/40">
                    <span className="font-display text-2xl text-champagne-light">NP</span>
                  </span>
                  <Divider />
                  <p className="font-statement italic text-xl text-ivory/90 leading-snug max-w-xs">
                    &ldquo;{t('about.story.quote')}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative border-y border-champagne/10 bg-ink py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            kicker={t('about.pillars.kicker')}
            title={t('about.pillars.title')}
            description={t('about.pillars.desc')}
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="text-center">
                  <div className="flex justify-center">
                    <IconTile icon={pillarIcons[i]} size="lg" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ivory">{p.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-noir py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <StatBand stats={stats} />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative border-y border-champagne/10 bg-noir-soft py-28 sm:py-32 px-6">
        <Testimonial
          quote={t('about.testimonial.quote')}
          name={t('about.testimonial.name')}
          role={t('about.testimonial.role')}
        />
      </section>

      <CTASection />
    </div>
  )
}

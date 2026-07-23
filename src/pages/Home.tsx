import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PhoneCall, ClipboardList, Route as RouteIcon, PackageCheck } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import StaggerWords from '../components/ui/StaggerWords'
import Divider from '../components/ui/Divider'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import AuroraBackdrop from '../components/ui/AuroraBackdrop'
import RouteMap from '../components/ui/RouteMap'
import StatBand from '../components/ui/StatBand'
import Testimonial from '../components/ui/Testimonial'
import CTASection from '../components/ui/CTASection'
import LocaleLink from '../i18n/LocaleLink'
import { useServices } from '../hooks/useServices'
import { usePageMeta } from '../hooks/usePageMeta'

const processIcons = [PhoneCall, ClipboardList, RouteIcon, PackageCheck]

export default function Home() {
  const { t } = useTranslation()
  usePageMeta('home')
  const services = useServices()
  const heroRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const vignette = useTransform(scrollYProgress, [0, 1], [0, 0.55])

  const stats = t('home.stats', { returnObjects: true }) as { value: string; label: string }[]
  const routePoints = t('home.route.points', { returnObjects: true }) as string[]
  const processSteps = t('home.process.steps', { returnObjects: true }) as { title: string; desc: string }[]

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden bg-noir grain">
        <motion.div style={{ y: bgY }} className="absolute inset-0">
          <AuroraBackdrop />
          <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(rgba(203,170,107,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(203,170,107,0.6)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute inset-0 bg-noir"
          style={{ opacity: vignette }}
        />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative mx-auto max-w-7xl w-full px-6 sm:px-10 pt-32 pb-24"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-4"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="h-px bg-champagne"
              />
              <p className="tracking-kicker text-xs sm:text-sm uppercase text-champagne/90 font-medium">
                {t('home.hero.kicker')}
              </p>
            </motion.div>

            <h1 className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.04]">
              <StaggerWords text={t('home.hero.line1')} delayStart={0.15} />
              <br />
              <StaggerWords
                text={t('home.hero.line2')}
                delayStart={0.45}
                className="font-statement italic text-gradient-gold shimmer-gold"
              />
              <br />
              <StaggerWords text={t('home.hero.line3')} delayStart={0.8} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15 }}
              className="mt-9 max-w-xl text-base sm:text-lg font-light leading-relaxed text-mist"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3 }}
              className="mt-11 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Button to="/quote-request">{t('home.hero.ctaPrimary')}</Button>
              <Button to="/services" variant="ghost">
                {t('home.hero.ctaSecondary')}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-mist-dim"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">{t('common.scroll')}</span>
          <div className="relative h-12 w-px overflow-hidden bg-champagne/15">
            <motion.span
              className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-champagne-light to-transparent"
              animate={{ y: [-16, 48] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-champagne/10 bg-noir-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <StatBand stats={stats} />
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="relative bg-noir py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-5">
                {t('home.craft.kicker')}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                {t('home.craft.title')}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <Divider className="mt-7" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-base font-light leading-relaxed text-mist">{t('home.craft.desc')}</p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <LocaleLink
                  to={service.link ?? '/services'}
                  className="group relative flex h-full flex-col justify-between overflow-hidden card-glass p-8 transition-all duration-500 hover:border-champagne/40 hover:-translate-y-1"
                >
                  <div>
                    <IconTile icon={service.icon} />
                    <h3 className="mt-6 font-display text-xl text-ivory">{service.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">{service.summary}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-champagne/80 group-hover:text-champagne-light transition-colors">
                    <span>{t('common.discover')}</span>
                    <span className="h-px w-6 bg-champagne/50 transition-all duration-500 group-hover:w-10" />
                  </div>
                </LocaleLink>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* THE ROUTE */}
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(203,170,107,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 sm:px-10 lg:grid-cols-2">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              {t('home.route.kicker')}
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">{t('home.route.title')}</h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">{t('home.route.desc')}</p>
            <ul className="mt-8 space-y-4">
              {routePoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light text-ivory/85">
                  <span className="h-1.5 w-1.5 rotate-45 bg-champagne/70 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative card-glass p-10 sm:p-14">
              <RouteMap className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-noir py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-5">
                {t('home.process.kicker')}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                {t('home.process.title')}
              </h2>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center">
                    <IconTile icon={processIcons[i]} size="lg" />
                  </div>
                  <p className="mb-3 font-display text-champagne/60 text-sm">{`0${i + 1}`}</p>
                  <h3 className="font-display text-xl text-ivory">{step.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <span className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-[calc(100%-2.5rem)] h-px hairline-solid" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative bg-paper py-28 sm:py-32 px-6">
        <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(ellipse_at_50%_0%,rgba(203,170,107,0.08),transparent_60%)]" />
        <Testimonial
          quote={t('home.testimonial.quote')}
          name={t('home.testimonial.name')}
          role={t('home.testimonial.role')}
          tone="light"
        />
      </section>

      <CTASection />
    </div>
  )
}

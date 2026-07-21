import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, PhoneCall, ClipboardList, Route as RouteIcon, PackageCheck } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import Divider from '../components/ui/Divider'
import Button from '../components/ui/Button'
import IconTile from '../components/ui/IconTile'
import AuroraBackdrop from '../components/ui/AuroraBackdrop'
import RouteMap from '../components/ui/RouteMap'
import StatBand from '../components/ui/StatBand'
import Testimonial from '../components/ui/Testimonial'
import CTASection from '../components/ui/CTASection'
import { services } from '../data/services'

const stats = [
  { value: '18+', label: 'Years of Craftsmanship' },
  { value: '2,400+', label: 'Assets Relocated' },
  { value: '24/7', label: 'Concierge Availability' },
  { value: '100%', label: 'Insured & Bonded' },
]

const process = [
  {
    icon: PhoneCall,
    title: 'Private Consultation',
    desc: 'A discreet conversation to understand the asset, the occasion and the standard expected.',
  },
  {
    icon: ClipboardList,
    title: 'Bespoke Planning',
    desc: 'Your logistics architect designs a tailored route, timeline and handling protocol.',
  },
  {
    icon: RouteIcon,
    title: 'Precision Execution',
    desc: 'Vetted specialists and enclosed, monitored transport carry your consignment with care.',
  },
  {
    icon: PackageCheck,
    title: 'White-Glove Delivery',
    desc: 'Arrival, placement and final inspection — completed to your exact satisfaction.',
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-noir">
        <AuroraBackdrop />
        <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(rgba(203,170,107,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(203,170,107,0.6)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl w-full px-6 sm:px-10 pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="tracking-kicker text-xs sm:text-sm uppercase text-champagne/90 font-medium mb-8"
            >
              Private International Logistics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.04]"
            >
              Precision, discretion <br />
              <span className="text-gradient-gold italic shimmer-gold">and craftsmanship</span> <br />
              in every mile.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-9 max-w-xl text-base sm:text-lg font-light leading-relaxed text-mist"
            >
              Nederland Portugal Express delivers bespoke logistics for those who accept nothing less than
              exceptional — luxury transport, yacht relocation, fine vehicle handling and private removals,
              between the Netherlands, Portugal and the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-11 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <Button to="/quote-request">Request a Quote</Button>
              <Button to="/services" variant="ghost">
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist-dim"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
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
                Our Craft
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                A complete suite of private logistics services
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <Divider className="mt-7" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-base font-light leading-relaxed text-mist">
                Every service is delivered with the same unwavering standard — meticulous planning, vetted
                specialists, and absolute discretion.
              </p>
            </Reveal>
          </div>

          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  to={service.link ?? '/services'}
                  className="group relative flex h-full flex-col justify-between overflow-hidden card-glass p-8 transition-all duration-500 hover:border-champagne/40 hover:-translate-y-1"
                >
                  <div>
                    <IconTile icon={service.icon} />
                    <h3 className="mt-6 font-display text-xl text-ivory">{service.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">{service.summary}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-champagne/80 group-hover:text-champagne-light transition-colors">
                    <span>Discover</span>
                    <span className="h-px w-6 bg-champagne/50 transition-all duration-500 group-hover:w-10" />
                  </div>
                </Link>
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
              Two Nations, One Standard
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              Connecting Amsterdam and Lisbon with uncompromising care
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
              Our roots run between two of Europe&rsquo;s most storied maritime nations. We understand the
              corridor intimately — its customs procedures, its ports, its private estates — allowing us to
              move seamlessly where others merely transport.
            </p>
            <ul className="mt-8 space-y-4">
              {['Established European transport network', 'Direct relationships with customs authorities', 'Trusted marina & storage partners'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-light text-ivory/85">
                    <span className="h-1.5 w-1.5 rotate-45 bg-champagne/70 shrink-0" />
                    {item}
                  </li>
                ),
              )}
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
                How We Work
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                A considered process, from first call to final delivery
              </h2>
            </Reveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto mb-6 flex items-center justify-center">
                    <IconTile icon={step.icon} size="lg" />
                  </div>
                  <p className="mb-3 font-display text-champagne/60 text-sm">{`0${i + 1}`}</p>
                  <h3 className="font-display text-xl text-ivory">{step.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{step.desc}</p>
                  {i < process.length - 1 && (
                    <span className="hidden lg:block absolute top-8 left-[calc(100%-1rem)] w-[calc(100%-2.5rem)] h-px hairline-solid" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="relative border-y border-champagne/10 bg-noir-soft py-28 sm:py-32 px-6">
        <Testimonial
          quote="Every detail was handled as though our collection were their own — from the first call to the final placement in Lisbon. Nothing short of exceptional."
          name="Private Client"
          role="Vehicle Collection Relocation, Amsterdam → Lisbon"
        />
      </section>

      <CTASection />
    </div>
  )
}

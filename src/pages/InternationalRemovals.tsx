import { ClipboardCheck, PackagePlus, FileCheck2, Truck, House, Check } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import CTASection from '../components/ui/CTASection'
import RouteMap from '../components/ui/RouteMap'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Private Survey',
    desc: 'A dedicated relocation consultant visits or video-surveys your residence to assess scope, volume and any specialist items.',
  },
  {
    icon: PackagePlus,
    title: 'Bespoke Packing',
    desc: 'Museum-grade materials and custom crating protect furniture, art and heirlooms for the journey ahead.',
  },
  {
    icon: FileCheck2,
    title: 'Customs & Documentation',
    desc: 'We prepare and manage all customs declarations and import documentation, door to door.',
  },
  {
    icon: Truck,
    title: 'Transport & Transit',
    desc: 'Your belongings travel via dedicated, tracked transport — never consolidated with unrelated shipments.',
  },
  {
    icon: House,
    title: 'Unpacking & Placement',
    desc: 'Our team unpacks, places and arranges furnishings in your new residence, exactly as instructed.',
  },
]

const included = [
  'Full household inventory & valuation',
  'Museum-grade packing materials',
  'Door-to-door customs clearance',
  'Dedicated relocation consultant',
  'Optional interim secure storage',
  'Unpacking & furniture placement',
  'Fragile & specialist item handling',
  'Insurance covering full transit value',
]

export default function InternationalRemovals() {
  return (
    <div>
      <PageHero
        kicker="Premium International Removals"
        title="Relocating a life, with the care it deserves"
        description="From a single-room apartment to a multi-generational estate, our removals specialists manage every detail between the Netherlands, Portugal and beyond — so your new home feels complete from the first evening."
        crumb="International Removals"
      />

      {/* WHAT'S INCLUDED */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              What&rsquo;s Included
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              A fully managed relocation, start to finish
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
              We believe a removal should feel like a service, not a logistics exercise. Every engagement
              includes the following as standard — with additional bespoke provisions available on request.
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
            kicker="Our Process"
            title="Five stages, one dedicated consultant"
            description="You will speak with a single point of contact throughout — no call centres, no handoffs."
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="text-center">
                  <div className="flex justify-center">
                    <IconTile icon={s.icon} size="lg" />
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
              Our Specialist Corridor
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              Netherlands &amp; Portugal, understood intimately
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
              While we relocate clients across Europe and beyond, the Netherlands–Portugal corridor remains
              our specialism. We know the ports, the procedures and the neighbourhoods — from Amsterdam&rsquo;s
              canal houses to Lisbon&rsquo;s historic quarters and the Algarve&rsquo;s private estates.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

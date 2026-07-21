import { ShieldCheck, EyeOff, Hammer, Target } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import StatBand from '../components/ui/StatBand'
import Testimonial from '../components/ui/Testimonial'
import CTASection from '../components/ui/CTASection'
import Divider from '../components/ui/Divider'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    desc: 'Every consignment is insured, documented and handled by teams who have earned their place in our network over years, not weeks.',
  },
  {
    icon: EyeOff,
    title: 'Discretion',
    desc: 'Confidentiality is not a policy for us, it is instinct. Client identities, assets and itineraries remain strictly private.',
  },
  {
    icon: Hammer,
    title: 'Craftsmanship',
    desc: 'From bespoke crating to cradle engineering, our specialists treat every task as a craft — never a commodity.',
  },
  {
    icon: Target,
    title: 'Precision',
    desc: 'Timelines, routes and handling protocols are engineered with the same rigour as the assets we transport.',
  },
]

const stats = [
  { value: '18+', label: 'Years of Craftsmanship' },
  { value: '2,400+', label: 'Assets Relocated' },
  { value: '30+', label: 'Countries Served' },
  { value: '100%', label: 'Insured & Bonded' },
]

export default function About() {
  return (
    <div>
      <PageHero
        kicker="About Nederland Portugal Express"
        title="A private standard of logistics excellence"
        description="Born from the corridor between Amsterdam and Lisbon, we have grown into a trusted name in bespoke logistics for clients who never compromise on quality."
        crumb="About"
      />

      {/* STORY */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">Our Story</p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              Logistics, elevated to a private service
            </h2>
            <p className="mt-7 text-base font-light leading-relaxed text-mist">
              Nederland Portugal Express was founded on a simple conviction: that the movement of exceptional
              things — vehicles, vessels, estates, heirlooms — deserves a standard of care equal to their
              value. What began as a specialist corridor between the Netherlands and Portugal has become a
              private logistics house serving discerning clients across the globe.
            </p>
            <p className="mt-5 text-base font-light leading-relaxed text-mist">
              We do not operate as a conventional carrier. Every engagement is designed bespoke, led by a
              dedicated logistics architect, and executed by specialists selected for their precision as much
              as their discretion.
            </p>
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
                  <p className="font-display italic text-xl text-ivory/90 leading-snug max-w-xs">
                    &ldquo;Precision is not a promise, it is a practice.&rdquo;
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
            kicker="Our Principles"
            title="The four pillars of our practice"
            description="These values are not aspirational — they are the operating standard behind every consignment we accept."
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="text-center">
                  <div className="flex justify-center">
                    <IconTile icon={p.icon} size="lg" />
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
          quote="They understand that discretion is as important as precision. Our estate relocation was handled without a single misstep, and without a single word spoken out of turn."
          name="Private Client"
          role="Estate Relocation, The Hague → Cascais"
        />
      </section>

      <CTASection />
    </div>
  )
}

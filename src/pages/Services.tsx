import { Check } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import IconTile from '../components/ui/IconTile'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import { services } from '../data/services'

export default function Services() {
  return (
    <div>
      <PageHero
        kicker="Our Services"
        title="A complete suite of private logistics"
        description="Seven disciplines, one unwavering standard. Each service is delivered by specialists selected for their precision, discretion and care."
        crumb="Services"
      />

      <section className="relative bg-noir py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 divide-y divide-champagne/10">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid grid-cols-1 gap-12 py-20 first:pt-0 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:items-start scroll-mt-32"
            >
              <Reveal>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <IconTile icon={service.icon} size="lg" />
                  <p className="mt-6 font-display text-champagne/50 text-sm">{`0${i + 1}`}</p>
                  <h2 className="mt-2 font-display font-medium text-3xl sm:text-4xl leading-tight">
                    {service.title}
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-base font-light leading-relaxed text-mist">{service.description}</p>
                  <ul className="mt-7 space-y-3.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm font-light text-ivory/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" strokeWidth={1.5} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="mt-8">
                      <Button to={service.link} variant="ghost">
                        Learn More
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}

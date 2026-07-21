import Reveal from './Reveal'
import Button from './Button'
import Divider from './Divider'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(203,170,107,0.1),transparent_60%)]" />
      <div className="absolute -bottom-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-champagne/[0.05] blur-[130px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
            Begin the Journey
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.1]">
            Experience logistics, <span className="text-gradient-gold-static italic">refined</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <Divider className="mt-7" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-mist font-light leading-relaxed">
            Share the details of your consignment and our concierge team will craft a tailored proposal within
            one business day — discreet, precise, and entirely in your service.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/quote-request" variant="primary">
              Request a Quote
            </Button>
            <Button to="/contact" variant="ghost">
              Speak with Concierge
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

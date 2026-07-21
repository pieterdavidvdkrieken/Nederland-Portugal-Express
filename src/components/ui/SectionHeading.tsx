import Reveal from './Reveal'
import Divider from './Divider'

interface SectionHeadingProps {
  kicker?: string
  title: string
  goldWord?: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {kicker && (
        <Reveal>
          <p className="tracking-kicker text-[11px] sm:text-xs uppercase text-champagne/90 font-medium mb-5">
            {kicker}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`font-display font-medium leading-[1.12] text-4xl sm:text-5xl md:text-[3.4rem] ${
            light ? 'text-noir' : 'text-ivory'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {isCenter && (
        <Reveal delay={0.14}>
          <Divider className="mt-7" />
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.18}>
          <p
            className={`mt-6 text-[15px] sm:text-base leading-relaxed font-light ${
              light ? 'text-ink/70' : 'text-mist'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

import Reveal from './Reveal'
import Divider from './Divider'

export default function Testimonial({
  quote,
  name,
  role,
  tone = 'dark',
}: {
  quote: string
  name: string
  role: string
  tone?: 'dark' | 'light'
}) {
  const isLight = tone === 'light'
  return (
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <span className={`font-display text-6xl leading-none ${isLight ? 'text-champagne-deep/50' : 'text-champagne/40'}`}>
          &ldquo;
        </span>
        <p
          className={`font-statement italic text-2xl sm:text-3xl leading-snug -mt-4 ${
            isLight ? 'text-ink/90' : 'text-ivory/95'
          }`}
        >
          {quote}
        </p>
        <Divider className="my-8" />
        <p className={`text-sm uppercase tracking-[0.18em] ${isLight ? 'text-champagne-deep' : 'text-champagne-light'}`}>
          {name}
        </p>
        <p className={`mt-1 text-xs ${isLight ? 'text-ink/50' : 'text-mist-dim'}`}>{role}</p>
      </div>
    </Reveal>
  )
}

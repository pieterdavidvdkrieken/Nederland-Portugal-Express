import Reveal from './Reveal'
import Divider from './Divider'

export default function Testimonial({
  quote,
  name,
  role,
}: {
  quote: string
  name: string
  role: string
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-display text-6xl text-champagne/40 leading-none">&ldquo;</span>
        <p className="font-display italic text-2xl sm:text-3xl leading-snug text-ivory/95 -mt-4">
          {quote}
        </p>
        <Divider className="my-8" />
        <p className="text-sm uppercase tracking-[0.18em] text-champagne-light">{name}</p>
        <p className="mt-1 text-xs text-mist-dim">{role}</p>
      </div>
    </Reveal>
  )
}

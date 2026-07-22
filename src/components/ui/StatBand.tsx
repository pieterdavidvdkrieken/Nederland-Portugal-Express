import Reveal from './Reveal'
import AnimatedNumber from './AnimatedNumber'

export interface Stat {
  value: string
  label: string
}

export default function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-x-8">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div className="text-center sm:text-left">
            <p className="font-display text-4xl sm:text-5xl text-gradient-gold-static">
              <AnimatedNumber value={s.value} delay={i * 0.1} />
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-mist">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

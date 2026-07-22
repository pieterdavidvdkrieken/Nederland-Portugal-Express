import { motion } from 'framer-motion'

export default function StaggerWords({
  text,
  className = '',
  delayStart = 0,
  wordDelay = 0.07,
}: {
  text: string
  className?: string
  delayStart?: number
  wordDelay?: number
}) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] mr-[0.28em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '112%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, delay: delayStart + i * wordDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

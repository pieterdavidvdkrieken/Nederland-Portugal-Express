import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import AuroraBackdrop from './AuroraBackdrop'

interface PageHeroProps {
  kicker: string
  title: string
  description?: string
  crumb: string
}

export default function PageHero({ kicker, title, description, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-noir pt-40 pb-24 sm:pt-48 sm:pb-28">
      <AuroraBackdrop />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(203,170,107,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(203,170,107,0.5)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-mist-dim"
        >
          <Link to="/" className="hover:text-champagne transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-champagne/80">{crumb}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-xl text-base text-mist font-light leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}

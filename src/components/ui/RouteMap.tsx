import { motion } from 'framer-motion'

export default function RouteMap({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="route-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#cbaa6b" stopOpacity="0" />
          <stop offset="50%" stopColor="#e3cd9c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#cbaa6b" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M 60 170 Q 260 20 460 150"
        stroke="rgba(203,170,107,0.22)"
        strokeWidth="1"
        strokeDasharray="3 7"
        fill="none"
      />
      <motion.path
        d="M 60 170 Q 260 20 460 150"
        stroke="url(#route-line)"
        strokeWidth="1.4"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Amsterdam node */}
      <circle cx="60" cy="170" r="3.5" fill="#e3cd9c" />
      <circle cx="60" cy="170" r="8" stroke="rgba(227,205,156,0.4)" fill="none" />
      <text x="60" y="196" textAnchor="middle" fill="#9aa5b5" fontSize="10" letterSpacing="2" fontFamily="Manrope, sans-serif">
        AMSTERDAM
      </text>

      {/* Lisbon node */}
      <circle cx="460" cy="150" r="3.5" fill="#e3cd9c" />
      <circle cx="460" cy="150" r="8" stroke="rgba(227,205,156,0.4)" fill="none" />
      <text x="460" y="176" textAnchor="middle" fill="#9aa5b5" fontSize="10" letterSpacing="2" fontFamily="Manrope, sans-serif">
        LISBON
      </text>

      <motion.g
        initial={{ offsetDistance: '0%', opacity: 0 }}
        animate={{ offsetDistance: '100%', opacity: 1 }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 0.6 }}
        style={{ offsetPath: `path('M 60 170 Q 260 20 460 150')` }}
      >
        <circle r="2.5" fill="#f6e9c8" />
      </motion.g>
    </svg>
  )
}

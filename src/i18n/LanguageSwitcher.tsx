import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { LANGUAGES } from './languages'
import { useLang } from './localePath'

export default function LanguageSwitcher({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const lang = useLang()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const switchTo = (code: string) => {
    const rest = location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/')
    navigate(`/${code}${rest === '/' ? '' : rest}`)
    setOpen(false)
  }

  const current = LANGUAGES.find((l) => l.code === lang)

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className={`flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
          variant === 'dark' ? 'text-mist hover:text-champagne-light' : 'text-ink/70 hover:text-ink'
        }`}
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.4} />
        {current?.code}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 z-50 mt-3 w-44 border border-champagne/20 bg-noir-soft/98 backdrop-blur-md py-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => switchTo(l.code)}
                className={`flex w-full items-center justify-between px-4 py-2 text-left text-[12px] transition-colors duration-200 hover:bg-champagne/10 ${
                  l.code === lang ? 'text-champagne-light' : 'text-ivory/80'
                }`}
              >
                {l.label}
                {l.code === lang && <Check className="h-3 w-3" strokeWidth={1.6} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

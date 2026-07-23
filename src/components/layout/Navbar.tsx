import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLang, localizePath } from '../../i18n/localePath'
import LanguageSwitcher from '../../i18n/LanguageSwitcher'

export default function Navbar() {
  const { t } = useTranslation()
  const lang = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.secureStorage'), to: '/secure-storage' },
    { label: t('nav.vehicleLogistics'), to: '/vehicle-logistics' },
    { label: t('nav.removals'), to: '/international-relocation' },
    { label: t('nav.contact'), to: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled || open ? 'bg-noir/85 backdrop-blur-md border-b border-champagne/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 py-5">
        <NavLink to={`/${lang}`} className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40 transition-transform duration-500 group-hover:scale-105">
            <span className="font-display text-sm text-champagne-light tracking-wide">NP</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-ivory">Nederland Portugal</span>
            <span className="text-[10px] tracking-[0.35em] text-champagne/80 uppercase mt-0.5">Express</span>
          </span>
        </NavLink>

        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={localizePath(lang, link.to)}
              end={link.to === '/'}
              className={({ isActive }) =>
                `group relative text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 py-1 ${
                  isActive ? 'text-champagne-light' : 'text-mist hover:text-ivory'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-champagne-light"
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 bg-champagne/50 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-7">
          <LanguageSwitcher />
          <NavLink
            to={localizePath(lang, '/quote-request')}
            className="inline-flex items-center gap-2 border border-champagne/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-light transition-all duration-300 hover:bg-champagne/10 hover:border-champagne"
          >
            {t('nav.requestQuote')}
          </NavLink>
        </div>

        <div className="flex items-center gap-4 xl:hidden">
          <LanguageSwitcher />
          <button
            className="text-ivory p-2 focus-gold"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden border-t border-champagne/10 bg-noir/95"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <NavLink
                    to={localizePath(lang, link.to)}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `text-lg font-display ${isActive ? 'text-champagne-light' : 'text-ivory/90'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="pt-3">
                <NavLink
                  to={localizePath(lang, '/quote-request')}
                  className="inline-flex items-center gap-2 border border-champagne/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-light"
                >
                  {t('nav.requestQuote')}
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

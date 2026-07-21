import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Secure Storage', to: '/secure-storage' },
  { label: 'Removals', to: '/international-removals' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
        <Link to="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40">
            <span className="font-display text-sm text-champagne-light tracking-wide">NP</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-ivory">Nederland Portugal</span>
            <span className="text-[10px] tracking-[0.35em] text-champagne/80 uppercase mt-0.5">Express</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 py-1 ${
                  isActive ? 'text-champagne-light' : 'text-mist hover:text-ivory'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-champagne-light"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/quote-request"
            className="inline-flex items-center gap-2 border border-champagne/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-light transition-all duration-300 hover:bg-champagne/10 hover:border-champagne"
          >
            Request a Quote
          </Link>
        </div>

        <button
          className="lg:hidden text-ivory p-2 focus-gold"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-t border-champagne/10 bg-noir/95"
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
                    to={link.to}
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
                <Link
                  to="/quote-request"
                  className="inline-flex items-center gap-2 border border-champagne/50 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne-light"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import Divider from '../ui/Divider'

const social = ['Instagram', 'LinkedIn']

const explore = [
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Secure Storage', to: '/secure-storage' },
  { label: 'International Removals', to: '/international-removals' },
]

const client = [
  { label: 'Request a Quote', to: '/quote-request' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-champagne/10 bg-noir-soft pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40">
                <span className="font-display text-sm text-champagne-light">NP</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-wide text-ivory">Nederland Portugal</span>
                <span className="text-[10px] tracking-[0.35em] text-champagne/80 uppercase mt-0.5">Express</span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-mist">
              Bespoke international logistics for those who measure quality in precision, discretion and
              craftsmanship — connecting the Netherlands, Portugal and the world.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex items-center gap-1.5 rounded-full border border-champagne/20 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-champagne/70 transition-colors hover:border-champagne hover:text-champagne-light"
                >
                  {s}
                  <ArrowUpRight className="h-3 w-3" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-champagne/80 mb-6">Explore</h3>
            <ul className="space-y-3.5">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-mist hover:text-ivory transition-colors font-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-champagne/80 mb-6">Client Services</h3>
            <ul className="space-y-3.5">
              {client.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-mist hover:text-ivory transition-colors font-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-champagne/80 mb-6">Concierge</h3>
            <ul className="space-y-4 text-sm font-light text-mist">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-champagne/70 shrink-0" strokeWidth={1.4} />
                <span>+31 20 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-champagne/70 shrink-0" strokeWidth={1.4} />
                <span>concierge@npexpress.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-champagne/70 shrink-0" strokeWidth={1.4} />
                <span>Amsterdam, Netherlands &amp; Lisbon, Portugal</span>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.14em] text-mist-dim">
          <p>&copy; {new Date().getFullYear()} Nederland Portugal Express. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Crafted with discretion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

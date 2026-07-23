import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Divider from '../ui/Divider'
import LocaleLink from '../../i18n/LocaleLink'
import { CONTACT } from '../../data/contact'

const social = [
  { label: 'Instagram', url: CONTACT.social.instagram },
  { label: 'LinkedIn', url: CONTACT.social.linkedin },
].filter((s) => s.url)

export default function Footer() {
  const { t } = useTranslation()

  const explore = [
    { label: t('footer.aboutUs'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.secureStorage'), to: '/secure-storage' },
    { label: t('nav.vehicleLogistics'), to: '/vehicle-logistics' },
    { label: t('nav.removals'), to: '/international-relocation' },
  ]

  const client = [
    { label: t('nav.requestQuote'), to: '/quote-request' },
    { label: t('nav.contact'), to: '/contact' },
  ]

  return (
    <footer className="relative border-t border-champagne/10 bg-noir-soft pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <LocaleLink to="/" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40">
                <span className="font-display text-sm text-champagne-light">NP</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg tracking-wide text-ivory">Nederland Portugal</span>
                <span className="text-[10px] tracking-[0.35em] text-champagne/80 uppercase mt-0.5">Express</span>
              </span>
            </LocaleLink>
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-mist">{t('footer.tagline')}</p>
            {social.length > 0 && (
              <div className="mt-7 flex items-center gap-3">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-1.5 rounded-full border border-champagne/20 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-champagne/70 transition-colors hover:border-champagne hover:text-champagne-light"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3" strokeWidth={1.4} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-champagne/80 mb-6">{t('footer.explore')}</h3>
            <ul className="space-y-3.5">
              {explore.map((l) => (
                <li key={l.to}>
                  <LocaleLink to={l.to} className="text-sm text-mist hover:text-ivory transition-colors font-light">
                    {l.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-champagne/80 mb-6">{t('footer.clientServices')}</h3>
            <ul className="space-y-3.5">
              {client.map((l) => (
                <li key={l.to}>
                  <LocaleLink to={l.to} className="text-sm text-mist hover:text-ivory transition-colors font-light">
                    {l.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.24em] text-champagne/80 mb-6">{t('footer.concierge')}</h3>
            <ul className="space-y-4 text-sm font-light text-mist">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-champagne/70 shrink-0" strokeWidth={1.4} />
                <a href={`tel:${CONTACT.phoneNL.replace(/\s/g, '')}`} className="hover:text-ivory transition-colors">
                  {CONTACT.phoneNL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-champagne/70 shrink-0" strokeWidth={1.4} />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ivory transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-champagne/70 shrink-0" strokeWidth={1.4} />
                <span>{t('footer.offices')}</span>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.14em] text-mist-dim">
          <p>&copy; {new Date().getFullYear()} Nederland Portugal Express. {t('footer.rights')}</p>
          <p className="flex items-center gap-2">
            <span>{t('footer.crafted')}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

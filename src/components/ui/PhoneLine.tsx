import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Phone {
  display: string
  tel: string | null
  whatsapp: string
  callable: boolean
}

export default function PhoneLine({ phone, className = '' }: { phone: Phone; className?: string }) {
  const { t } = useTranslation()
  const whatsappHref = `https://wa.me/${phone.whatsapp}`

  return (
    <p className={`text-sm font-light ${className}`}>
      <span className="inline-flex items-center gap-2">
        {phone.tel ? (
          <a href={`tel:${phone.tel}`} className="hover:text-ivory transition-colors">
            {phone.display}
          </a>
        ) : (
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
            {phone.display}
          </a>
        )}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-5 w-5 items-center justify-center rounded-full border border-champagne/25 text-champagne/70 transition-colors hover:border-champagne hover:text-champagne-light"
        >
          <MessageCircle className="h-3 w-3" strokeWidth={1.6} />
        </a>
      </span>
      <span className="block text-[11px] uppercase tracking-[0.1em] text-mist-dim mt-1">
        {phone.callable ? t('contact.info.callAndWhatsapp') : t('contact.info.whatsappOnly')}
      </span>
    </p>
  )
}

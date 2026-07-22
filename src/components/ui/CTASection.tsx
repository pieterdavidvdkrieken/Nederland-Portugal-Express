import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import Button from './Button'
import Divider from './Divider'

export default function CTASection() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden bg-ink py-28 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(203,170,107,0.1),transparent_60%)]" />
      <div className="absolute -bottom-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-champagne/[0.05] blur-[130px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">{t('cta.kicker')}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-statement font-medium text-4xl sm:text-5xl leading-[1.1]">
            {t('cta.title')} <span className="text-gradient-gold-static italic">{t('cta.titleItalic')}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <Divider className="mt-7" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-mist font-light leading-relaxed">{t('cta.desc')}</p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/quote-request" variant="primary">
              {t('cta.primary')}
            </Button>
            <Button to="/contact" variant="ghost">
              {t('cta.secondary')}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

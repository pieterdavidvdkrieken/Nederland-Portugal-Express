import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import { Label, TextInput, TextArea, Field } from '../components/ui/FormField'
import LocaleLink from '../i18n/LocaleLink'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  const { t } = useTranslation()
  usePageMeta('contact')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const info = [
    { icon: Phone, title: t('contact.info.telephone'), lines: ['+31 20 123 4567', '+351 21 456 7890'] },
    { icon: Mail, title: t('contact.info.email'), lines: ['concierge@npexpress.com'] },
    { icon: MapPin, title: t('contact.info.offices'), lines: [t('contact.info.office1'), t('contact.info.office2')] },
    {
      icon: Clock,
      title: t('contact.info.availability'),
      lines: [t('contact.info.availability1'), t('contact.info.availability2')],
    },
  ]

  const [notePrefix, noteSuffix] = t('contact.info.note').split('{{link}}')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <div>
      <PageHero
        kicker={t('contact.hero.kicker')}
        title={t('contact.hero.title')}
        description={t('contact.hero.desc')}
        crumb={t('nav.contact')}
      />

      <section className="relative bg-noir py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
          {/* INFO */}
          <Reveal>
            <div className="space-y-10">
              {info.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/35 bg-champagne/[0.06]">
                    <item.icon className="h-[18px] w-[18px] text-champagne-light" strokeWidth={1.3} />
                  </span>
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.16em] text-champagne-light">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="mt-1.5 text-sm font-light text-mist">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <Divider className="!justify-start" />
              <p className="text-sm font-light leading-relaxed text-mist max-w-sm">
                {notePrefix}
                <LocaleLink to="/quote-request" className="text-champagne-light underline underline-offset-4">
                  {t('contact.info.linkLabel')}
                </LocaleLink>
                {noteSuffix}
              </p>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.12}>
            <div className="card-glass p-8 sm:p-12">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-champagne-light" strokeWidth={1.2} />
                  <h3 className="mt-6 font-display text-2xl">{t('contact.form.successTitle')}</h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-mist">{t('contact.form.successDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Field>
                      <Label>{t('contact.form.fullName')}</Label>
                      <TextInput required name="name" placeholder={t('contact.form.fullNamePlaceholder')} />
                    </Field>
                    <Field>
                      <Label>{t('contact.form.email')}</Label>
                      <TextInput required type="email" name="email" placeholder={t('contact.form.emailPlaceholder')} />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Field>
                      <Label>{t('contact.form.phone')}</Label>
                      <TextInput type="tel" name="phone" placeholder={t('contact.form.phonePlaceholder')} />
                    </Field>
                    <Field>
                      <Label>{t('contact.form.subject')}</Label>
                      <TextInput name="subject" placeholder={t('contact.form.subjectPlaceholder')} />
                    </Field>
                  </div>
                  <Field>
                    <Label>{t('contact.form.message')}</Label>
                    <TextArea required name="message" rows={5} placeholder={t('contact.form.messagePlaceholder')} />
                  </Field>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? t('common.sending') : t('contact.form.send')}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

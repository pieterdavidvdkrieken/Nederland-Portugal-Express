import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import { Label, TextInput, TextArea, Select, Field } from '../components/ui/FormField'
import Button from '../components/ui/Button'
import { useServices } from '../hooks/useServices'
import { usePageMeta } from '../hooks/usePageMeta'

export default function QuoteRequest() {
  const { t } = useTranslation()
  usePageMeta('quote')
  const services = useServices()
  const steps = t('quote.steps', { returnObjects: true }) as string[]
  const flexibilityOptions = t('quote.form.flexibilityOptions', { returnObjects: true }) as string[]
  const clientTypes = [t('quote.clientTypes.private'), t('quote.clientTypes.business')]

  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [clientType, setClientType] = useState(clientTypes[0])

  const isLast = step === steps.length - 1

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isLast) {
      next()
      return
    }
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <div>
      <PageHero
        kicker={t('quote.hero.kicker')}
        title={t('quote.hero.title')}
        description={t('quote.hero.desc')}
        crumb={t('quote.crumb')}
      />

      <section className="relative bg-noir py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="card-glass p-8 sm:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-champagne-light" strokeWidth={1.2} />
                <h3 className="mt-7 font-display text-3xl">{t('quote.form.successTitle')}</h3>
                <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-mist">
                  {t('quote.form.successDesc')}
                </p>
              </div>
            ) : (
              <>
                {/* PROGRESS */}
                <div className="mb-14">
                  <div className="flex items-center justify-between">
                    {steps.map((label, i) => (
                      <div key={label} className="flex flex-1 items-center last:flex-none">
                        <div className="flex flex-col items-center gap-2.5">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-display transition-colors duration-500 ${
                              i <= step
                                ? 'border-champagne bg-champagne/10 text-champagne-light'
                                : 'border-champagne/20 text-mist-dim'
                            }`}
                          >
                            {i + 1}
                          </div>
                          <span
                            className={`hidden sm:block text-[10px] uppercase tracking-[0.14em] text-center ${
                              i <= step ? 'text-champagne-light' : 'text-mist-dim'
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className="mx-3 h-px flex-1 bg-champagne/15 relative -translate-y-3.5 sm:translate-y-0">
                            <motion.div
                              className="absolute inset-y-0 left-0 bg-champagne"
                              initial={false}
                              animate={{ width: i < step ? '100%' : '0%' }}
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-8"
                    >
                      {step === 0 && (
                        <>
                          <Field>
                            <Label>{t('quote.form.service')}</Label>
                            <Select required name="service" defaultValue="">
                              <option value="" disabled>
                                {t('quote.form.servicePlaceholder')}
                              </option>
                              {services.map((s) => (
                                <option key={s.slug} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                            </Select>
                          </Field>
                          <Field>
                            <Label>{t('quote.form.clientType')}</Label>
                            <div className="flex gap-3">
                              {clientTypes.map((ct) => (
                                <button
                                  type="button"
                                  key={ct}
                                  onClick={() => setClientType(ct)}
                                  className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] border transition-colors duration-300 ${
                                    clientType === ct
                                      ? 'border-champagne bg-champagne/10 text-champagne-light'
                                      : 'border-champagne/20 text-mist hover:border-champagne/50'
                                  }`}
                                >
                                  {ct}
                                </button>
                              ))}
                            </div>
                          </Field>
                          <Field>
                            <Label>{t('quote.form.description')}</Label>
                            <TextArea
                              required
                              name="description"
                              rows={5}
                              placeholder={t('quote.form.descriptionPlaceholder')}
                            />
                          </Field>
                        </>
                      )}

                      {step === 1 && (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <Field>
                              <Label>{t('quote.form.origin')}</Label>
                              <TextInput required name="origin" placeholder={t('quote.form.originPlaceholder')} />
                            </Field>
                            <Field>
                              <Label>{t('quote.form.destination')}</Label>
                              <TextInput
                                required
                                name="destination"
                                placeholder={t('quote.form.destinationPlaceholder')}
                              />
                            </Field>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <Field>
                              <Label>{t('quote.form.date')}</Label>
                              <TextInput type="date" name="date" />
                            </Field>
                            <Field>
                              <Label>{t('quote.form.flexibility')}</Label>
                              <Select name="flexibility" defaultValue={flexibilityOptions[1]}>
                                {flexibilityOptions.map((opt) => (
                                  <option key={opt}>{opt}</option>
                                ))}
                              </Select>
                            </Field>
                          </div>
                          <Field>
                            <Label>{t('quote.form.notes')}</Label>
                            <TextArea name="notes" rows={4} placeholder={t('quote.form.notesPlaceholder')} />
                          </Field>
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <Field>
                              <Label>{t('quote.form.fullName')}</Label>
                              <TextInput required name="name" placeholder={t('quote.form.fullNamePlaceholder')} />
                            </Field>
                            <Field>
                              <Label>{t('quote.form.email')}</Label>
                              <TextInput
                                required
                                type="email"
                                name="email"
                                placeholder={t('quote.form.emailPlaceholder')}
                              />
                            </Field>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <Field>
                              <Label>{t('quote.form.phone')}</Label>
                              <TextInput
                                required
                                type="tel"
                                name="phone"
                                placeholder={t('quote.form.phonePlaceholder')}
                              />
                            </Field>
                            {clientType === clientTypes[1] && (
                              <Field>
                                <Label>{t('quote.form.company')}</Label>
                                <TextInput name="company" placeholder={t('quote.form.companyPlaceholder')} />
                              </Field>
                            )}
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-12 flex items-center justify-between">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={back}
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-mist hover:text-ivory transition-colors"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        {t('common.back')}
                      </button>
                    ) : (
                      <span />
                    )}
                    <Button type="submit" icon={!isLast} disabled={submitting}>
                      {isLast ? (submitting ? t('common.submitting') : t('quote.form.submit')) : t('common.continue')}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

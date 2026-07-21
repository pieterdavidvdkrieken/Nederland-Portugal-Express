import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import { Label, TextInput, TextArea, Field } from '../components/ui/FormField'

const info = [
  {
    icon: Phone,
    title: 'Telephone',
    lines: ['+31 20 123 4567', '+351 21 456 7890'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['concierge@npexpress.com'],
  },
  {
    icon: MapPin,
    title: 'Offices',
    lines: ['Amsterdam, Netherlands', 'Lisbon, Portugal — by private appointment'],
  },
  {
    icon: Clock,
    title: 'Availability',
    lines: ['Concierge desk: 24/7', 'Offices: Mon–Fri, 09:00–18:00 CET'],
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

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
        kicker="Contact"
        title="Speak with our concierge team"
        description="Whether a question or a bespoke request, our team responds with the same discretion and precision we bring to every consignment."
        crumb="Contact"
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
                For time-sensitive requests, our concierge desk is available around the clock. For tailored
                proposals, we recommend the{' '}
                <a href="/quote-request" className="text-champagne-light underline underline-offset-4">
                  Quote Request
                </a>{' '}
                form.
              </p>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.12}>
            <div className="card-glass p-8 sm:p-12">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-champagne-light" strokeWidth={1.2} />
                  <h3 className="mt-6 font-display text-2xl">Message Received</h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-mist">
                    Thank you for reaching out. A member of our concierge team will respond within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Field>
                      <Label>Full Name</Label>
                      <TextInput required name="name" placeholder="Jane van der Berg" />
                    </Field>
                    <Field>
                      <Label>Email Address</Label>
                      <TextInput required type="email" name="email" placeholder="jane@example.com" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <Field>
                      <Label>Phone (optional)</Label>
                      <TextInput type="tel" name="phone" placeholder="+31 6 0000 0000" />
                    </Field>
                    <Field>
                      <Label>Subject</Label>
                      <TextInput name="subject" placeholder="How can we help?" />
                    </Field>
                  </div>
                  <Field>
                    <Label>Message</Label>
                    <TextArea required name="message" rows={5} placeholder="Tell us about your request..." />
                  </Field>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
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

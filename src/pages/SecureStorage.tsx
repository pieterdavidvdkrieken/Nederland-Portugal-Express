import {
  Thermometer,
  Camera,
  Fingerprint,
  FlameKindling,
  ShieldCheck,
  Clock,
  Car,
  Anchor,
  Palette,
  Wine,
  Boxes,
  Building2,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { StaggerGroup, StaggerItem } from '../components/ui/Stagger'
import IconTile from '../components/ui/IconTile'
import CTASection from '../components/ui/CTASection'
import Divider from '../components/ui/Divider'

const features = [
  {
    icon: Camera,
    title: '24/7 Monitored Surveillance',
    desc: 'High-definition CCTV and manned patrols provide continuous oversight of every facility, every hour of every day.',
  },
  {
    icon: Fingerprint,
    title: 'Restricted Access Control',
    desc: 'Biometric and credentialed entry ensures only authorised personnel and clients ever reach the storage floor.',
  },
  {
    icon: Thermometer,
    title: 'Climate & Humidity Control',
    desc: 'Precision environmental systems protect coachwork, timber, canvas and upholstery from the elements.',
  },
  {
    icon: FlameKindling,
    title: 'Fire Suppression Systems',
    desc: 'Advanced detection and suppression technology, engineered specifically for high-value asset environments.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured Bays',
    desc: 'Every stored asset is covered under comprehensive insurance, with valuations reviewed and confirmed in advance.',
  },
  {
    icon: Clock,
    title: 'Flexible Storage Terms',
    desc: 'From a single season to indefinite safekeeping, storage is arranged entirely around your requirements.',
  },
]

const categories = [
  { icon: Car, label: 'Motor Vehicles & Collections' },
  { icon: Anchor, label: 'Yachts, Tenders & Marine Equipment' },
  { icon: Palette, label: 'Fine Art & Antiques' },
  { icon: Wine, label: 'Wine & Collectibles' },
  { icon: Boxes, label: 'Estate & Household Belongings' },
  { icon: Building2, label: 'Business & Corporate Inventory' },
]

export default function SecureStorage() {
  return (
    <div>
      <PageHero
        kicker="Secure Storage Solutions"
        title="Safekeeping, engineered to the standard of what it holds"
        description="Our private storage facilities across the Netherlands and Portugal combine bank-grade security with the environmental precision that fine assets demand — for as long as required."
        crumb="Secure Storage"
      />

      {/* FEATURES */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeading
            kicker="Facility Standards"
            title="Security and precision, in equal measure"
            description="Every facility in our network is audited to the same exacting checklist — no exceptions, regardless of location."
          />
          <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-full card-glass p-8">
                  <IconTile icon={f.icon} />
                  <h3 className="mt-6 font-display text-xl text-ivory">{f.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-mist">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHAT WE STORE */}
      <section className="relative border-y border-champagne/10 bg-ink py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
                What We Store
              </p>
              <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
                From single heirlooms to entire collections
              </h2>
              <p className="mt-7 text-base font-light leading-relaxed text-mist max-w-lg">
                Whether safeguarding a vehicle collection between seasons, a yacht through winter, or an
                estate&rsquo;s belongings during a relocation, our storage solutions are configured to the
                asset — not the other way around.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 card-glass px-6 py-5 transition-colors duration-300 hover:border-champagne/40"
                  >
                    <IconTile icon={c.icon} size="sm" />
                    <span className="text-sm font-light text-ivory/90">{c.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-noir py-28 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="tracking-kicker text-xs uppercase text-champagne/90 font-medium mb-6">
              Arranging Storage
            </p>
            <h2 className="font-display font-medium text-4xl sm:text-5xl leading-[1.12]">
              A private assessment, before a single item moves
            </h2>
            <Divider className="mt-7" />
            <p className="mt-7 text-base font-light leading-relaxed text-mist">
              Our team conducts a private consultation to understand the asset, its environmental
              requirements and your access needs. A tailored storage plan — including transport to the
              facility if required — is then confirmed before anything is scheduled.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

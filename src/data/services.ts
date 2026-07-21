import {
  Globe2,
  Gem,
  Car,
  Anchor,
  Boxes,
  Warehouse,
  Compass,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  slug: string
  title: string
  shortTitle: string
  icon: LucideIcon
  summary: string
  description: string
  points: string[]
  link?: string
}

export const services: Service[] = [
  {
    slug: 'international-logistics',
    title: 'International Luxury Logistics',
    shortTitle: 'Luxury Logistics',
    icon: Globe2,
    summary:
      'End-to-end coordination of high-value consignments across borders, with a single point of contact from origin to destination.',
    description:
      'From Amsterdam to Lisbon and every capital between, we orchestrate multimodal transport for clients who expect precision at every mile. Every shipment is planned bespoke — routes, customs, timing and handling tailored to the asset and the occasion.',
    points: ['Dedicated logistics architect', 'Real-time consignment tracking', 'Customs & documentation handled'],
  },
  {
    slug: 'white-glove-transport',
    title: 'White Glove Transport',
    shortTitle: 'White Glove Transport',
    icon: Gem,
    summary:
      'Hand-selected specialists manage loading, transit and delivery of your most valued possessions with meticulous care.',
    description:
      'Our white glove teams are trained in the handling of fine art, antiques, haute couture and objects of irreplaceable value. Every touchpoint — from padded crating to climate-controlled transit — is executed with the discretion of a private household.',
    points: ['Custom crating & padding', 'Climate-controlled vehicles', 'Trained handling specialists'],
  },
  {
    slug: 'vehicle-transport',
    title: 'High-Value Vehicle Transport',
    shortTitle: 'Vehicle Transport',
    icon: Car,
    summary:
      'Enclosed, insured transport for supercars, classics and collections — treated with the reverence they deserve.',
    description:
      'Whether relocating a single collector car or an entire garage, our enclosed carriers and soft-strap systems protect bodywork and provenance alike. Documentation, insurance valuation and concours-level care are standard, not optional.',
    points: ['Enclosed, air-ride transport', 'Full insurance valuation', 'Soft-strap, zero-contact loading'],
  },
  {
    slug: 'yacht-marine-logistics',
    title: 'Yacht & Marine Logistics',
    shortTitle: 'Yacht & Marine',
    icon: Anchor,
    summary:
      'Haul-out, cradling, overland transport and marina-to-marina coordination for yachts and marine vessels.',
    description:
      'We manage the full lifecycle of marine relocation — survey, unstepping, cradle engineering, permits and escort — coordinating with marinas across the Iberian and North Sea coastlines to deliver your vessel safely and on schedule.',
    points: ['Marina-to-marina coordination', 'Custom cradle engineering', 'Permit & escort management'],
  },
  {
    slug: 'international-removals',
    title: 'Premium International Removals',
    shortTitle: 'International Removals',
    icon: Boxes,
    summary:
      'Full-service relocation of homes and estates between the Netherlands, Portugal and beyond.',
    description:
      'Relocating a life deserves more than a moving truck. Our removals specialists plan every detail — packing, customs, storage and unpacking — so your new residence feels like home from the first evening.',
    points: ['Bespoke packing & inventory', 'Door-to-door customs clearance', 'Unpacking & placement service'],
    link: '/international-removals',
  },
  {
    slug: 'secure-storage',
    title: 'Secure Storage Solutions',
    shortTitle: 'Secure Storage',
    icon: Warehouse,
    summary:
      'Climate-controlled, monitored facilities for vehicles, vessels, art and estate belongings — however long required.',
    description:
      'Our storage facilities combine bank-grade security with the environmental precision fine assets demand — humidity and temperature control, 24-hour surveillance, and private, individually secured bays.',
    points: ['24/7 monitored surveillance', 'Climate & humidity control', 'Private, individually secured bays'],
    link: '/secure-storage',
  },
  {
    slug: 'tailor-made-logistics',
    title: 'Tailor-Made Logistics',
    shortTitle: 'Bespoke Solutions',
    icon: Compass,
    summary:
      'For requirements that fall outside the ordinary, our concierge team designs a solution built entirely around you.',
    description:
      'Private and business clients alike come to us with the unusual — a same-week estate relocation, a multi-vessel fleet move, a discreet cross-border delivery. We design the solution first, and the logistics follow.',
    points: ['Dedicated concierge planning', 'Private & corporate programmes', 'Absolute discretion, always'],
  },
]

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug)

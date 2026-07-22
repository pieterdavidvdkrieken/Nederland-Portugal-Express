import { Globe2, Gem, Car, Anchor, Boxes, Warehouse, Compass, type LucideIcon } from 'lucide-react'

export const serviceIcons: Record<string, LucideIcon> = {
  'international-logistics': Globe2,
  'white-glove-transport': Gem,
  'vehicle-transport': Car,
  'yacht-marine-logistics': Anchor,
  'international-removals': Boxes,
  'secure-storage': Warehouse,
  'tailor-made-logistics': Compass,
}

export const serviceLinks: Record<string, string | undefined> = {
  'international-removals': '/international-removals',
  'secure-storage': '/secure-storage',
}

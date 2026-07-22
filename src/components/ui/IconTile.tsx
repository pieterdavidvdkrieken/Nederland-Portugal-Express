import type { LucideIcon } from 'lucide-react'

export default function IconTile({
  icon: Icon,
  size = 'md',
  tone = 'dark',
}: {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  tone?: 'dark' | 'light'
}) {
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-16 w-16',
  }
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }
  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${sizes[size]} ${
        tone === 'dark' ? 'border border-champagne/35 bg-champagne/[0.06]' : 'border border-ink/20 bg-ink/[0.04]'
      }`}
    >
      <div className={`absolute inset-[3px] rounded-full border ${tone === 'dark' ? 'border-champagne/10' : 'border-ink/10'}`} />
      <Icon
        strokeWidth={1.25}
        className={`${iconSizes[size]} ${tone === 'dark' ? 'text-champagne-light' : 'text-ink'}`}
      />
    </div>
  )
}

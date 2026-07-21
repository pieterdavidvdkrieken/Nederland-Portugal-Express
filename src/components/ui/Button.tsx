import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'ghost' | 'ghost-light'
  className?: string
  icon?: boolean
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  icon = true,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-500 focus-gold disabled:opacity-40 disabled:pointer-events-none'

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-champagne-deep via-champagne-light to-champagne-deep bg-[length:200%_100%] bg-left hover:bg-right text-noir shadow-[0_8px_30px_-8px_rgba(203,170,107,0.5)]',
    ghost:
      'border border-champagne/40 text-ivory hover:border-champagne hover:bg-champagne/5',
    'ghost-light':
      'border border-ink/25 text-ink hover:border-ink hover:bg-ink/5',
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  )

  const cls = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {content}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} className={cls} disabled={disabled}>
      {content}
    </button>
  )
}

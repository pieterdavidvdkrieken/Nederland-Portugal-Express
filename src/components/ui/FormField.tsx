import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

const baseClasses =
  'w-full border-b border-champagne/25 bg-transparent px-0 py-3 text-sm font-light text-ivory placeholder:text-mist-dim/70 transition-colors duration-300 focus:border-champagne focus:outline-none'

export function Label({ children }: { children: ReactNode }) {
  return <label className="block mb-2.5 text-[11px] uppercase tracking-[0.16em] text-champagne/80">{children}</label>
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${baseClasses} ${props.className ?? ''}`} />
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${baseClasses} resize-none ${props.className ?? ''}`} />
}

export function Select({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`${baseClasses} appearance-none cursor-pointer [&>option]:bg-noir-soft [&>option]:text-ivory ${props.className ?? ''}`}
    >
      {children}
    </select>
  )
}

export function Field({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}

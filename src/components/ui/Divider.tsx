export default function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 sm:w-16 hairline-solid" />
      <span className="h-1.5 w-1.5 rotate-45 border border-champagne/70" />
      <span className="h-px w-10 sm:w-16 hairline-solid" />
    </div>
  )
}

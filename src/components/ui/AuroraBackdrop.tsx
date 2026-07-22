export default function AuroraBackdrop({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-champagne/[0.08] blur-[140px] animate-float" />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-ink-lighter/40 blur-[120px]" />
      <div
        className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-champagne-deep/[0.07] blur-[130px] animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,9,13,0.6)_100%)]" />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setEnabled(supportsHover)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const ring = { x: 0, y: 0 }
    let target = { x: 0, y: 0 }
    let raf: number

    const onMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      if (!visible) setVisible(true)
      const el = (e.target as HTMLElement)?.closest('a, button, input, textarea, select, [role="button"]')
      setHovering(!!el)
    }

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18
      ring.y += (target.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled, visible])

  if (!enabled) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-light"
      />
      <div
        ref={ringRef}
        className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ease-out ${
          hovering ? 'h-11 w-11 border-champagne bg-champagne/10' : 'h-7 w-7 border-champagne/50'
        }`}
      />
    </div>
  )
}

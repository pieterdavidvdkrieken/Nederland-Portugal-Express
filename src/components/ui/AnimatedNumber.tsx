import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

function parseValue(value: string) {
  const match = value.match(/^([\d.,]+)(.*)$/)
  if (!match) return null
  const [, numStr, suffix] = match
  if (numStr.includes('/')) return null
  const hasComma = numStr.includes(',')
  const num = parseFloat(numStr.replace(/,/g, ''))
  if (Number.isNaN(num)) return null
  return { num, suffix, hasComma }
}

export default function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const parsed = parseValue(value)
  const [display, setDisplay] = useState(parsed ? '0' : value)

  useEffect(() => {
    if (!inView || !parsed) return
    const controls = animate(0, parsed.num, {
      duration: 1.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        const rounded = Math.round(v)
        setDisplay(parsed.hasComma ? rounded.toLocaleString('en-US') : String(rounded))
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  if (!parsed) return <span ref={ref}>{value}</span>
  return (
    <span ref={ref}>
      {display}
      {parsed.suffix}
    </span>
  )
}

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SESSION_KEY = 'npe-visited'

export default function Preloader() {
  const [show, setShow] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.sessionStorage.getItem(SESSION_KEY)) {
      setDone(true)
      return
    }
    setShow(true)
    window.sessionStorage.setItem(SESSION_KEY, '1')
    const timer = window.setTimeout(() => setShow(false), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  if (done) return null

  return (
    <AnimatePresence onExitComplete={() => setDone(true)}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-noir"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="36"
              cy="36"
              r="30"
              fill="none"
              stroke="rgba(203,170,107,0.9)"
              strokeWidth="1"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: { pathLength: 1, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
              }}
            />
            <motion.text
              x="36"
              y="43"
              textAnchor="middle"
              fill="#e3cd9c"
              fontFamily="Cormorant Garamond, serif"
              fontSize="20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6 } }}
            >
              NP
            </motion.text>
          </motion.svg>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.6 } }}
            className="mt-5 text-[10px] uppercase tracking-[0.4em] text-mist"
          >
            Nederland Portugal Express
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

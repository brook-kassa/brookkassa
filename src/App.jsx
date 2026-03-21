import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from './components/HeroSection'
import { SocialHub } from './components/SocialHub'

function App() {
  useEffect(() => {
    const updateCursor = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', updateCursor)

    return () => window.removeEventListener('pointermove', updateCursor)
  }, [])

  return (
    <div className="page-shell relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-6 text-[var(--text-primary)] sm:px-6 lg:px-8">
      <div className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <motion.main
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[360px_minmax(0,1fr)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroSection />
        <SocialHub />
      </motion.main>
    </div>
  )
}

export default App

import { motion } from 'framer-motion'

const heroTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
const defaultProfileSrc = '/media/meatdubaimall.png'
const defaultFrame = { zoom: 1.82, x: 100, y: 31 }

export function HeroSection() {
  const profileStyle = {
    objectPosition: `${defaultFrame.x}% ${defaultFrame.y}%`,
    transform: `scale(${defaultFrame.zoom})`,
    transformOrigin: `${defaultFrame.x}% ${defaultFrame.y}%`,
  }

  return (
    <section>
      <motion.div
        className="hero-panel hero-panel-compact neumorphic-panel relative overflow-hidden px-6 py-7 sm:px-8 sm:py-9"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={heroTransition}
      >
        <div className="hero-pointer-glow" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...heroTransition, delay: 0.08 }}
          >
            <div className="profile-shell">
              <div className="profile-ring">
                <img
                  src={defaultProfileSrc}
                  alt="Brook Kassa profile photo"
                  className="profile-photo h-full w-full object-cover"
                  style={profileStyle}
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = '/media/profile-orb.svg'
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-5xl font-semibold tracking-[-0.06em] text-balance text-[var(--accent-strong)] sm:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: 0.12 }}
          >
            Brook Kassa
          </motion.h1>
        </div>
      </motion.div>
    </section>
  )
}
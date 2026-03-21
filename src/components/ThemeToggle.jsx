import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      className="neumorphic-toggle fixed right-4 top-4 z-30 inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium sm:right-6 sm:top-6"
      onClick={onToggle}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      aria-label="Toggle color theme"
    >
      <span className="icon-well">{isDark ? <FiSun /> : <FiMoon />}</span>
      <span>{isDark ? 'Light surfaces' : 'Dark surfaces'}</span>
    </motion.button>
  )
}
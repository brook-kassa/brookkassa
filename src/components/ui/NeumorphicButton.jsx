import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export function NeumorphicButton({ href, icon: Icon, label, description, compact = false }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`neumorphic-button group relative flex overflow-hidden rounded-[22px] border border-white/8 text-left ${
        compact ? 'items-center gap-4 px-4 py-4' : 'min-h-[148px] flex-col gap-6 px-5 py-5'
      }`}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className="button-glow" aria-hidden="true" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <span className="icon-well shrink-0">
          <Icon className="text-[1.15rem]" />
        </span>
        <span className="arrow-chip">
          <FiArrowUpRight />
        </span>
      </div>
      <div className="relative z-10 flex flex-1 flex-col gap-2">
        <span className="font-display text-lg font-semibold tracking-[-0.03em]">{label}</span>
        {description ? <span className="max-w-[28ch] text-sm leading-6 text-[var(--text-secondary)]">{description}</span> : null}
      </div>
    </motion.a>
  )
}
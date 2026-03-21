import { motion } from 'framer-motion'

const viewport = { once: true, amount: 0.2 }

export function SectionShell({ eyebrow, title, description, id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`neumorphic-panel section-shell relative overflow-hidden p-5 sm:p-7 lg:p-9 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-glow" aria-hidden="true" />
      <div className="relative z-10 mb-6 flex max-w-3xl flex-col gap-3 sm:mb-8">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
        {description ? <p className="text-sm text-[var(--text-secondary)] sm:text-base">{description}</p> : null}
      </div>
      <div className="relative z-10">{children}</div>
    </motion.section>
  )
}
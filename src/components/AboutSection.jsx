import { motion } from 'framer-motion'
import { identityPoints } from '../data/content'
import { SectionShell } from './SectionShell'

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Identity"
      title="Built at the intersection of systems, movement, and visual taste."
      description="Brook Kassa is an Ethiopian creator building Supernova Systems while documenting life through fitness, travel, technology, and refined digital aesthetics."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="copy-card">
          <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            The goal is not just to ship functional products, but to shape experiences that feel calm, precise, and deeply intentional. That same lens carries across creative direction, media work, and the way this site behaves under your fingertips.
          </p>
        </div>

        <div className="grid gap-3">
          {identityPoints.map((point, index) => (
            <motion.div
              key={point}
              className="identity-pill"
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              {point}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
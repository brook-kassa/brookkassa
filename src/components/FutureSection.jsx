import { motion } from 'framer-motion'
import { futureBlocks } from '../data/content'
import { SectionShell } from './SectionShell'

export function FutureSection() {
  return (
    <SectionShell
      id="future"
      eyebrow="Expansion"
      title="Structured for the next layer of the business."
      description="The homepage already reserves space for content, products, and monetization so the brand can evolve without redesigning the foundation later."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {futureBlocks.map((block, index) => {
          const Icon = block.icon

          return (
            <motion.article
              key={block.title}
              className="future-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="icon-well">
                  <Icon />
                </span>
                <span className="status-badge">{block.badge}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em]">{block.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{block.description}</p>
            </motion.article>
          )
        })}
      </div>
    </SectionShell>
  )
}
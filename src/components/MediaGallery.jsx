import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiPlay } from 'react-icons/fi'
import { photoCollection, videoHighlights } from '../data/content'
import { SectionShell } from './SectionShell'

export function MediaGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <SectionShell
      id="media"
      eyebrow="Media"
      title="Photography and video presented with room to breathe."
      description="A modular gallery for photos and motion work, with hover depth, modal viewing, and placeholder content ready to be replaced by real portfolio assets later."
    >
      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {photoCollection.map((photo, index) => (
            <motion.button
              key={photo.title}
              type="button"
              className="media-tile group overflow-hidden rounded-[24px] text-left"
              onClick={() => setSelectedPhoto(photo)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.985 }}
            >
              <div className="media-image-wrap">
                <img src={photo.image} alt={photo.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">{photo.category}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em]">{photo.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{photo.accent}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {videoHighlights.map((video, index) => (
            <motion.a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="video-card group"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="video-thumb">
                <img src={video.image} alt={video.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <span className="play-chip">
                  <FiPlay />
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{video.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{video.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-strong)]">
                  Watch on YouTube
                  <FiExternalLink />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto ? (
          <motion.div
            className="modal-backdrop fixed inset-0 z-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="modal-panel neumorphic-panel max-w-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="max-h-[70vh] w-full object-cover" />
              <div className="p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">{selectedPhoto.category}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em]">{selectedPhoto.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">{selectedPhoto.accent}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  )
}
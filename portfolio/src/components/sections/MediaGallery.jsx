import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play, ExternalLink } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

// Placeholder photo data — swap src for real photos
const PHOTOS = [
  { id: 1, src: null, alt: 'Mountain landscape at golden hour', tags: ['Nature', 'Travel'] },
  { id: 2, src: null, alt: 'City skyline at night', tags: ['Urban', 'Night'] },
  { id: 3, src: null, alt: 'Abstract architecture', tags: ['Architecture'] },
  { id: 4, src: null, alt: 'Portrait in natural light', tags: ['Portrait'] },
  { id: 5, src: null, alt: 'Minimalist workspace', tags: ['Lifestyle'] },
  { id: 6, src: null, alt: 'Travel moments', tags: ['Travel'] },
];

// YouTube videos — replace video IDs for actual videos
const VIDEOS = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Latest Vlog — Life as a Cloud Engineer',
    views: '2.4K views',
    date: 'Mar 2026',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Ethiopia Travel Diary',
    views: '1.8K views',
    date: 'Feb 2026',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Building Supernova Systems — Behind the Scenes',
    views: '3.1K views',
    date: 'Jan 2026',
  },
];

const PALETTE = [
  'linear-gradient(145deg, #142b54 0%, #0e2244 100%)',
  'linear-gradient(145deg, #1a2f5c 0%, #112448 100%)',
  'linear-gradient(145deg, #0f2248 0%, #0a1c3a 100%)',
  'linear-gradient(145deg, #18305e 0%, #102244 100%)',
];

export default function MediaGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [tab, setTab] = useState('photos');

  return (
    <section id="media" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel>Media</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: '#e8edf5' }}
          >
            Photography &{' '}
            <span className="text-gradient-gold">Video</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: '#5f80ae' }}>
            Documenting life, travel, and the world through a lens.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-2xl p-1 gap-1"
            style={{
              background: 'linear-gradient(145deg, #0e2244 0%, #0B1D3A 100%)',
              boxShadow: 'inset 3px 3px 8px #060d1a, inset -2px -2px 6px #1a3468',
            }}
          >
            {['photos', 'videos'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-200"
                style={
                  tab === t
                    ? {
                        background: 'linear-gradient(145deg, #142b54 0%, #0e2244 100%)',
                        color: '#D4AF37',
                        boxShadow: '4px 4px 10px #060d1a, -3px -3px 8px #1a3468',
                      }
                    : { color: '#4a6a9a' }
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {tab === 'photos' ? (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <PhotoGrid photos={PHOTOS} onSelect={setSelectedPhoto} />
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <VideoGrid videos={VIDEOS} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* View more */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@BROOK-KASSA-9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
            style={{ color: '#D4AF37' }}
          >
            View all content on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function PhotoGrid({ photos, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, i) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
          style={{
            background: PALETTE[i % PALETTE.length],
            boxShadow: '6px 6px 14px #060d1a, -4px -4px 10px #1a3468',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
          whileHover={{ scale: 1.03, boxShadow: '10px 10px 22px #060d1a, -6px -6px 16px #1a3468' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(photo)}
        >
          {photo.src ? (
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Placeholder tile */
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p className="text-xs text-center leading-snug" style={{ color: '#3a5a8a' }}>
                {photo.alt}
              </p>
              <div className="flex flex-wrap gap-1 justify-center">
                {photo.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(212,175,55,0.08)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.15)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 rounded-2xl"
            style={{ background: 'rgba(6,13,26,0.55)', backdropFilter: 'blur(2px)' }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
              <ZoomIn size={16} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function VideoGrid({ videos }) {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {videos.map((video, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
            boxShadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {playing === i ? (
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={video.title}
              />
            </div>
          ) : (
            <div
              className="aspect-video relative cursor-pointer group flex items-center justify-center"
              style={{ background: 'linear-gradient(145deg, #0e2244 0%, #0B1D3A 100%)' }}
              onClick={() => setPlaying(i)}
            >
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #b8941e)',
                    boxShadow: '0 0 20px rgba(212,175,55,0.3)',
                    color: '#0B1D3A',
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} fill="currentColor" />
                </motion.div>
                <span className="text-xs" style={{ color: '#4a6a9a' }}>Click to play</span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-2xl"
                style={{ background: 'rgba(212,175,55,0.03)' }} />
            </div>
          )}

          <div className="p-4">
            <h3 className="text-sm font-semibold mb-1 leading-snug" style={{ color: '#c8d8f0' }}>
              {video.title}
            </h3>
            <div className="flex items-center gap-2 text-xs" style={{ color: '#3a5a8a' }}>
              <span>{video.views}</span>
              <span>·</span>
              <span>{video.date}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PhotoModal({ photo, onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-2xl w-full mx-4 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
          boxShadow: '0 40px 80px rgba(6,13,26,0.8)',
          border: '1px solid rgba(212,175,55,0.15)',
        }}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#8fadd4' }}
        >
          <X size={16} />
        </button>

        {/* Image area */}
        <div
          className="aspect-video w-full flex items-center justify-center"
          style={{ background: PALETTE[photo.id % PALETTE.length] }}
        >
          {photo.src ? (
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-contain" />
          ) : (
            <div className="text-center p-8">
              <div className="text-5xl mb-4">📷</div>
              <p className="text-sm" style={{ color: '#5f80ae' }}>{photo.alt}</p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <p className="text-sm font-medium" style={{ color: '#c8d8f0' }}>{photo.alt}</p>
          <div className="flex gap-2 mt-3">
            {photo.tags.map((tag) => (
              <span key={tag}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: 'rgba(212,175,55,0.08)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.15)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

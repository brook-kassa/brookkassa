import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import NeuCard from '../ui/NeuCard';
import SectionLabel from '../ui/SectionLabel';
import { ExternalLink } from 'lucide-react';

const SOCIALS = [
  {
    name: 'YouTube',
    handle: '@BROOK-KASSA-9',
    href: 'https://www.youtube.com/@BROOK-KASSA-9',
    color: '#FF0000',
    gradient: 'linear-gradient(135deg, #FF0000 0%, #cc0000 100%)',
    bgGlow: 'rgba(255,0,0,0.12)',
    description: 'Videos & vlogs',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@brook_kassa',
    href: 'https://www.instagram.com/brook_kassa/',
    color: '#E1306C',
    gradient: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
    bgGlow: 'rgba(225,48,108,0.12)',
    description: 'Photography & life',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@brookkassa4',
    href: 'https://www.tiktok.com/@brookkassa4',
    color: '#69C9D0',
    gradient: 'linear-gradient(135deg, #010101 0%, #69C9D0 50%, #EE1D52 100%)',
    bgGlow: 'rgba(105,201,208,0.1)',
    description: 'Short-form content',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    handle: '@brookZkassa',
    href: 'https://x.com/brookZkassa',
    color: '#ffffff',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
    bgGlow: 'rgba(255,255,255,0.06)',
    description: 'Thoughts & updates',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Brook Kassa',
    href: 'https://www.facebook.com/profile.php?id=100071239117446',
    color: '#1877F2',
    gradient: 'linear-gradient(135deg, #1877F2 0%, #0d5fd4 100%)',
    bgGlow: 'rgba(24,119,242,0.12)',
    description: 'Community & updates',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    handle: '763-300-0767',
    href: 'https://wa.me/17633000767',
    color: '#25D366',
    gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
    bgGlow: 'rgba(37,211,102,0.12)',
    description: 'Direct message',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export default function SocialHub() {
  const ref = useScrollReveal();

  return (
    <section id="social" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div
        className="orb w-72 h-72 opacity-10"
        style={{
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          bottom: '10%',
          right: '5%',
          animationDelay: '2s',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-hidden">
          <SectionLabel>Connect</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: '#e8edf5' }}
          >
            Find Me <span className="text-gradient-gold">Everywhere</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: '#5f80ae' }}>
            Photography, videos, thoughts, and direct conversation — all in one place.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SOCIALS.map((s) => (
            <SocialCard key={s.name} social={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SocialCard({ social }) {
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      className="group relative flex items-center gap-4 p-5 rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
        boxShadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      whileHover={{
        y: -5,
        boxShadow: `12px 12px 26px #060d1a, -8px -8px 20px #1a3468, 0 0 20px ${social.bgGlow.replace('0.12', '0.2')}`,
      }}
      whileTap={{
        scale: 0.97,
        boxShadow: 'inset 4px 4px 12px #060d1a, inset -3px -3px 8px #1a3468',
      }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
    >
      {/* Glow background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: social.bgGlow }}
      />

      {/* Surface sheen */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
        }}
      />

      {/* Icon */}
      <div
        className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
        style={{
          background: social.gradient,
          boxShadow: `4px 4px 10px #060d1a, -2px -2px 6px #1a3468, 0 0 10px ${social.bgGlow}`,
          color: '#fff',
        }}
      >
        {social.icon}
      </div>

      {/* Text */}
      <div className="relative z-10 flex-1 min-w-0">
        <div
          className="font-display font-semibold text-sm mb-0.5"
          style={{ color: '#e8edf5' }}
        >
          {social.name}
        </div>
        <div className="text-xs truncate" style={{ color: '#5f80ae' }}>
          {social.handle}
        </div>
        <div className="text-xs mt-1" style={{ color: '#3a5a8a' }}>
          {social.description}
        </div>
      </div>

      {/* Arrow */}
      <div
        className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0"
        style={{ color: social.color }}
      >
        <ExternalLink size={14} />
      </div>
    </motion.a>
  );
}

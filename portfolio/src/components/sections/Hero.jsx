import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import NeuButton from '../ui/NeuButton';
import { ArrowDown, Sparkles } from 'lucide-react';

const ROLES = [
  'Cloud Engineer',
  'Builder',
  'Creator',
  'Photographer',
  'Storyteller',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const role = useTypewriter(ROLES, { speed: 90, deleteSpeed: 55, pause: 2200 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient-bg grid-pattern"
    >
      {/* Floating orbs */}
      <div
        className="orb w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)',
          top: '10%',
          left: '5%',
          animationDelay: '0s',
        }}
      />
      <div
        className="orb w-80 h-80 opacity-15"
        style={{
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          top: '15%',
          right: '8%',
          animationDelay: '3s',
        }}
      />
      <div
        className="orb w-64 h-64 opacity-10"
        style={{
          background: 'radial-gradient(circle, #2466c8 0%, transparent 70%)',
          bottom: '20%',
          left: '15%',
          animationDelay: '5s',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-20 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.22)',
              color: '#D4AF37',
              boxShadow: '4px 4px 10px #060d1a, -3px -3px 8px #1a3468',
            }}
          >
            <Sparkles size={12} />
            Available for collaboration
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 rounded-full profile-glow"
              style={{ zIndex: -1 }}
            />
            {/* Image wrapper */}
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden relative"
              style={{
                boxShadow: '8px 8px 20px #060d1a, -5px -5px 16px #1a3468',
                border: '3px solid rgba(212,175,55,0.35)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Placeholder avatar — replaced by real photo */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #142b54 0%, #0B1D3A 100%)',
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Face */}
                  <circle cx="50" cy="38" r="20" fill="#1a3468" />
                  {/* Body */}
                  <ellipse cx="50" cy="82" rx="30" ry="22" fill="#1a3468" />
                  {/* Gold highlight */}
                  <circle cx="50" cy="38" r="14" fill="#0e2244" />
                  <circle cx="44" cy="34" r="3" fill="#2d4a72" />
                  <circle cx="56" cy="34" r="3" fill="#2d4a72" />
                  <path d="M44 44 Q50 50 56 44" stroke="#2d4a72" strokeWidth="2" fill="none" strokeLinecap="round" />
                  {/* Monogram */}
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#D4AF37"
                    fontFamily="system-ui"
                    opacity="0.7"
                  >
                    BK
                  </text>
                </svg>
              </div>
              {/* Surface sheen */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, transparent 50%)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-5xl md:text-7xl mb-3 tracking-tight"
          style={{ color: '#e8edf5', lineHeight: 1.05 }}
        >
          Brook{' '}
          <span className="text-gradient-gold">Kassa</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl font-display font-medium mb-5 h-8"
          style={{ color: '#8fadd4' }}
        >
          <span>{role}</span>
          <span className="typewriter-cursor" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          style={{ color: '#5f80ae' }}
        >
          Building systems, documenting life, and creating aesthetic digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <NeuButton
            href="#social"
            variant="gold"
            size="lg"
          >
            <Sparkles size={16} />
            Connect with Me
          </NeuButton>
          <NeuButton
            href="#media"
            variant="default"
            size="lg"
          >
            View My Work
          </NeuButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.a
            href="#social"
            className="flex flex-col items-center gap-2"
            style={{ color: '#2d4a72' }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import { BookOpen, Briefcase, TrendingUp, Lock, ArrowRight } from 'lucide-react';

const COMING = [
  {
    icon: <BookOpen size={20} />,
    title: 'Blog',
    sub: 'Thoughts on cloud, tech, and life',
    desc: 'Long-form writing on cloud architecture, entrepreneurship, fitness, and living with intention.',
    eta: 'Q3 2026',
    accent: '#D4AF37',
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Services',
    sub: 'Professional cloud consulting',
    desc: 'Cloud architecture reviews, infrastructure builds, and digital experience design for businesses ready to scale.',
    eta: 'Q2 2026',
    accent: '#4d8fe0',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Courses',
    sub: 'Learn cloud from a practitioner',
    desc: 'Practical, no-fluff cloud engineering courses built from real-world experience — not theory.',
    eta: 'Q4 2026',
    accent: '#25D366',
  },
];

export default function FutureSections() {
  const ref = useScrollReveal();

  return (
    <section id="future" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      {/* BG orbs */}
      <div
        className="orb w-64 h-64 opacity-08"
        style={{
          background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
          top: '50%',
          right: '-5%',
          animationDelay: '4s',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-hidden">
          <SectionLabel>Coming Soon</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: '#e8edf5' }}
          >
            What's <span className="text-gradient-gold">Next</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: '#5f80ae' }}>
            Building in public. These sections are in development — stay tuned.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal-hidden">
          {COMING.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0e2244 0%, #0B1D3A 100%)',
                boxShadow: 'inset 4px 4px 12px #060d1a, inset -3px -3px 8px #1a3468',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
              whileHover={{
                boxShadow: `8px 8px 18px #060d1a, -5px -5px 14px #1a3468, 0 0 16px ${item.accent}22`,
                y: -4,
              }}
            >
              {/* Coming soon lock badge */}
              <div className="absolute top-4 right-4">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#2d4a72' }}
                >
                  <Lock size={12} />
                </div>
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${item.accent}15`,
                  border: `1px solid ${item.accent}30`,
                  color: item.accent,
                }}
              >
                {item.icon}
              </div>

              {/* ETA */}
              <div className="text-xs font-semibold mb-2" style={{ color: item.accent }}>
                ETA {item.eta}
              </div>

              <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#c8d8f0' }}>
                {item.title}
              </h3>
              <p className="text-xs font-medium mb-3" style={{ color: item.accent + 'aa' }}>
                {item.sub}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#3a5a8a' }}>
                {item.desc}
              </p>

              {/* Notify CTA */}
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold" style={{ color: '#2d4a72' }}>
                <span>Get notified</span>
                <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter teaser */}
        <motion.div
          className="mt-12 reveal-hidden text-center p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
            boxShadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468',
            border: '1px solid rgba(212,175,55,0.15)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-2xl font-display font-bold mb-2" style={{ color: '#e8edf5' }}>
            Stay in the Loop
          </div>
          <p className="text-sm mb-6" style={{ color: '#5f80ae' }}>
            Follow along as Supernova Systems comes to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-xl text-sm outline-none"
              style={{
                background: '#0B1D3A',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#e8edf5',
                boxShadow: 'inset 3px 3px 8px #060d1a, inset -2px -2px 6px #1a3468',
              }}
            />
            <button
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #b8941e)',
                color: '#0B1D3A',
                boxShadow: '4px 4px 10px #060d1a, -3px -3px 8px #1a3468, 0 0 12px rgba(212,175,55,0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '6px 6px 14px #060d1a, -4px -4px 10px #1a3468, 0 0 20px rgba(212,175,55,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '4px 4px 10px #060d1a, -3px -3px 8px #1a3468, 0 0 12px rgba(212,175,55,0.2)';
              }}
            >
              Notify Me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

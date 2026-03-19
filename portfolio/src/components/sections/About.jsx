import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import NeuCard from '../ui/NeuCard';
import SectionLabel from '../ui/SectionLabel';
import { Cloud, Camera, Dumbbell, Globe, Zap, Code2 } from 'lucide-react';

const TRAITS = [
  { icon: <Cloud size={18} />,     label: 'Cloud Engineer',         desc: 'Designing and building scalable cloud infrastructure' },
  { icon: <Code2 size={18} />,     label: 'Builder',                desc: 'Founder of Supernova Systems' },
  { icon: <Camera size={18} />,    label: 'Photographer',           desc: 'Capturing life through a lens' },
  { icon: <Globe size={18} />,     label: 'Ethiopian',              desc: 'Proud heritage, global perspective' },
  { icon: <Dumbbell size={18} />,  label: 'Fitness Enthusiast',     desc: 'Discipline in mind and body' },
  { icon: <Zap size={18} />,       label: 'Aesthetics First',       desc: 'Design is the language of intent' },
];

const STATS = [
  { value: '5+',  label: 'Years in Cloud' },
  { value: '∞',   label: 'Ideas Building' },
  { value: '1',   label: 'Life to Live' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      {/* Background orb */}
      <div
        className="orb w-80 h-80 opacity-10"
        style={{
          background: 'radial-gradient(circle, #1a3a8f 0%, transparent 70%)',
          top: '20%',
          left: '-5%',
          animationDelay: '1s',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-hidden">
          <SectionLabel>About</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: '#e8edf5' }}
          >
            Who I <span className="text-gradient-gold">Am</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — bio */}
          <div className="reveal-hidden">
            <NeuCard className="p-7 md:p-8" glow>
              <div
                className="w-10 h-1.5 rounded-full mb-6"
                style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
              />
              <p className="text-base leading-relaxed mb-5" style={{ color: '#8fadd4' }}>
                I'm <span style={{ color: '#D4AF37', fontWeight: 600 }}>Brook Kassa</span> — an Ethiopian{' '}
                <span style={{ color: '#c8d8f0' }}>Cloud Engineer</span>, builder, and creator living at the
                intersection of technology, aesthetics, and storytelling.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#8fadd4' }}>
                I'm building <span style={{ color: '#c8d8f0', fontWeight: 600 }}>Supernova Systems</span> — a
                venture focused on modern cloud architecture and digital experiences that feel like products, not
                just websites.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#8fadd4' }}>
                When I'm not architecting infrastructure, I'm behind a camera, in the gym, or exploring a new
                corner of the world — always with intention.
              </p>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-4 mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="font-display font-bold text-2xl mb-1 text-gradient-gold"
                    >
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: '#4a6a9a' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </NeuCard>
          </div>

          {/* Right — traits grid */}
          <div className="grid grid-cols-1 gap-4 reveal-hidden">
            {TRAITS.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
                  boxShadow: '6px 6px 14px #060d1a, -4px -4px 10px #1a3468',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                whileHover={{
                  y: -3,
                  boxShadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468, 0 0 12px rgba(212,175,55,0.1)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    color: '#D4AF37',
                    boxShadow: '3px 3px 8px #060d1a, -2px -2px 6px #1a3468',
                  }}
                >
                  {trait.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: '#c8d8f0' }}>
                    {trait.label}
                  </div>
                  <div className="text-xs" style={{ color: '#4a6a9a' }}>
                    {trait.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

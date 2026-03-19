import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import { Rocket, Cloud, Globe, Lock, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    icon: <Rocket size={22} />,
    name: 'Supernova Systems',
    tagline: 'Building the future, one system at a time',
    status: 'In Development',
    statusColor: '#D4AF37',
    description:
      'A cloud engineering and digital experience studio focused on building premium, scalable products for modern businesses.',
    tags: ['Cloud Architecture', 'DevOps', 'SaaS'],
    color: 'rgba(212,175,55,0.12)',
    borderColor: 'rgba(212,175,55,0.2)',
  },
  {
    icon: <Cloud size={22} />,
    name: 'Cloud Infrastructure',
    tagline: 'Enterprise-grade cloud solutions',
    status: 'Active',
    statusColor: '#25D366',
    description:
      'Designing and deploying scalable, secure, and cost-efficient cloud architectures across AWS, Azure, and GCP.',
    tags: ['AWS', 'Azure', 'Terraform', 'Kubernetes'],
    color: 'rgba(54,96,167,0.12)',
    borderColor: 'rgba(54,96,167,0.2)',
  },
  {
    icon: <Globe size={22} />,
    name: 'Digital Experiences',
    tagline: 'Premium web presence design',
    status: 'Coming Soon',
    statusColor: '#8fadd4',
    description:
      'Crafting modern, tactile digital experiences for individuals and brands who want to stand out in a noisy world.',
    tags: ['React', 'Design Systems', 'Animation'],
    color: 'rgba(105,201,208,0.08)',
    borderColor: 'rgba(105,201,208,0.15)',
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal-hidden">
          <SectionLabel>Projects</SectionLabel>
          <h2
            className="font-display font-bold text-4xl md:text-5xl mb-4"
            style={{ color: '#e8edf5' }}
          >
            What I'm <span className="text-gradient-gold">Building</span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: '#5f80ae' }}>
            Systems, products, and experiences designed with intention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              className="reveal-hidden relative rounded-2xl overflow-hidden p-6 flex flex-col"
              style={{
                background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
                boxShadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468',
                border: `1px solid ${project.borderColor}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: `12px 12px 28px #060d1a, -8px -8px 20px #1a3468, 0 0 20px ${project.color}`,
              }}
            >
              {/* Glow bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: project.color, opacity: 0.5 }}
              />
              {/* Sheen */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: project.color,
                  border: `1px solid ${project.borderColor}`,
                  color: '#D4AF37',
                  boxShadow: '4px 4px 10px #060d1a, -2px -2px 6px #1a3468',
                }}
              >
                {project.icon}
              </div>

              {/* Status */}
              <div className="relative z-10 flex items-center gap-2 mb-3">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: project.statusColor }}
                />
                <span className="text-xs font-semibold" style={{ color: project.statusColor }}>
                  {project.status}
                </span>
              </div>

              {/* Name */}
              <h3
                className="relative z-10 font-display font-bold text-lg mb-1"
                style={{ color: '#e8edf5' }}
              >
                {project.name}
              </h3>
              <p className="relative z-10 text-xs mb-3 font-medium" style={{ color: '#D4AF37' }}>
                {project.tagline}
              </p>

              {/* Description */}
              <p className="relative z-10 text-sm leading-relaxed mb-5 flex-1" style={{ color: '#5f80ae' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#6a8ab4',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

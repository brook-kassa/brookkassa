import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'Connect',  href: '#social' },
  { label: 'Media',    href: '#media' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: scrolled ? '12px 24px' : '20px 24px',
          transition: 'padding 300ms ease',
        }}
      >
        <div
          className="max-w-5xl mx-auto flex items-center justify-between"
          style={{
            background: scrolled
              ? 'rgba(11,29,58,0.85)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderRadius: '16px',
            border: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
            boxShadow: scrolled ? '0 8px 32px rgba(6,13,26,0.6)' : 'none',
            padding: '12px 20px',
            transition: 'all 300ms ease',
          }}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #b8941e)',
                boxShadow: '0 0 12px rgba(212,175,55,0.3)',
                color: '#0B1D3A',
              }}
            >
              BK
            </div>
            <span
              className="font-display font-semibold text-sm hidden sm:block"
              style={{ color: '#e8edf5' }}
            >
              Brook Kassa
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
                style={{
                  color: active === link.label ? '#D4AF37' : '#8fadd4',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active === link.label ? '#D4AF37' : '#8fadd4')
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/17633000767"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: '#D4AF37',
              boxShadow: '4px 4px 10px #060d1a, -3px -3px 8px #1a3468',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.15)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(212,175,55,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212,175,55,0.1)';
              e.currentTarget.style.boxShadow = '4px 4px 10px #060d1a, -3px -3px 8px #1a3468';
            }}
          >
            Contact
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl"
            style={{ color: '#8fadd4' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4"
            style={{
              background: 'rgba(14,34,68,0.96)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 20px 60px rgba(6,13,26,0.7)',
            }}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActive(link.label); setOpen(false); }}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200"
                  style={{ color: '#8fadd4' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a
                  href="https://wa.me/17633000767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{ color: '#D4AF37', background: 'rgba(212,175,55,0.08)' }}
                  onClick={() => setOpen(false)}
                >
                  Contact via WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

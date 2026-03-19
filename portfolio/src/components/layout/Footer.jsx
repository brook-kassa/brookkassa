import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="relative mt-32 py-10 px-6 text-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="mb-4 text-2xl font-display font-bold"
          style={{ color: '#D4AF37' }}
        >
          Brook Kassa
        </div>
        <p className="text-sm mb-6" style={{ color: '#4a6a9a' }}>
          Cloud Engineer · Builder · Creator
        </p>
        <div className="section-divider w-48 mx-auto mb-6" />
        <p className="text-xs" style={{ color: '#2d4a72' }}>
          © {new Date().getFullYear()} Brook Kassa · Built with intention
        </p>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';

export default function NeuCard({
  children,
  className = '',
  hover = true,
  glow = false,
  goldBorder = false,
  onClick,
  style = {},
}) {
  const base = {
    background: 'linear-gradient(145deg, #112650 0%, #0e2244 100%)',
    boxShadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468',
    borderRadius: '20px',
    border: goldBorder ? '1px solid rgba(212,175,55,0.18)' : '1px solid rgba(255,255,255,0.05)',
    ...style,
  };

  const hoverStyles = hover
    ? {
        y: -5,
        boxShadow: glow
          ? '12px 12px 26px #060d1a, -8px -8px 20px #1a3468, 0 0 24px rgba(212,175,55,0.18)'
          : '12px 12px 26px #060d1a, -8px -8px 20px #1a3468',
      }
    : {};

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={base}
      whileHover={hoverStyles}
      whileTap={hover && onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
    >
      {/* Inner highlight gradient (simulates top-left light source) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.06) 100%)',
          borderRadius: 'inherit',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

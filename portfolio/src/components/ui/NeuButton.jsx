import { motion } from 'framer-motion';

/**
 * Reusable Neumorphic Button
 * Variants: 'default' | 'gold' | 'ghost' | 'icon'
 */
export default function NeuButton({
  children,
  onClick,
  href,
  variant = 'default',
  size = 'md',
  className = '',
  external = false,
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    icon: 'p-3',
  };

  const variantStyles = {
    default: {
      base: 'bg-[#0e2244] text-[#8fadd4] border border-white/5',
      hover: '#112650',
      shadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468',
      hoverShadow: '12px 12px 26px #060d1a, -8px -8px 20px #1a3468',
      pressedShadow: 'inset 4px 4px 12px #060d1a, inset -3px -3px 8px #1a3468',
    },
    gold: {
      base: 'bg-[#0e2244] border border-[rgba(212,175,55,0.2)]',
      textClass: 'text-gradient-gold',
      shadow: '8px 8px 18px #060d1a, -5px -5px 14px #1a3468, 0 0 0 1px rgba(212,175,55,0.1)',
      hoverShadow: '12px 12px 26px #060d1a, -8px -8px 20px #1a3468, 0 0 20px rgba(212,175,55,0.25)',
      pressedShadow: 'inset 4px 4px 12px #060d1a, inset -3px -3px 8px #1a3468',
    },
    ghost: {
      base: 'bg-transparent text-[#8fadd4] border border-white/8',
      shadow: 'none',
      hoverShadow: '6px 6px 14px #060d1a, -4px -4px 10px #1a3468',
      pressedShadow: 'inset 3px 3px 8px #060d1a, inset -2px -2px 6px #1a3468',
    },
  };

  const vs = variantStyles[variant] || variantStyles.default;

  const Comp = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined }
    : {};

  return (
    <Comp
      {...linkProps}
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center gap-2
        rounded-2xl font-medium
        select-none outline-none
        transition-colors duration-200
        ${sizeClasses[size] || sizeClasses.md}
        ${vs.base}
        ${disabled ? 'opacity-40 pointer-events-none' : 'cursor-pointer'}
        ${className}
      `}
      style={{ boxShadow: vs.shadow }}
      whileHover={{
        scale: 1.02,
        boxShadow: vs.hoverShadow,
        backgroundColor: vs.hover,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
        boxShadow: vs.pressedShadow,
        y: 0,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {/* Surface sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.045) 0%, transparent 50%, rgba(0,0,0,0.07) 100%)',
        }}
      />
      {variant === 'gold' ? (
        <span className="relative z-10 flex items-center gap-2 text-gradient-gold font-semibold">
          {children}
        </span>
      ) : (
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      )}
    </Comp>
  );
}

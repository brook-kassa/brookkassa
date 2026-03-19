/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c5d0e6',
          200: '#9eb0d4',
          300: '#7390c2',
          400: '#5478b5',
          500: '#3560a7',
          600: '#2e529a',
          700: '#24408a',
          800: '#1a2f7a',
          900: '#0B1D3A',
          950: '#07122a',
        },
        gold: {
          300: '#f0d060',
          400: '#e8c234',
          500: '#D4AF37',
          600: '#b8941e',
          700: '#9c7a0f',
        },
        surface: {
          base:    '#0e2040',
          raised:  '#112348',
          elevated:'#142b54',
          overlay: '#172f5e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'neu-flat':    '6px 6px 12px #070f1e, -4px -4px 10px #1a3260',
        'neu-raised':  '8px 8px 16px #070f1e, -6px -6px 14px #1a3260',
        'neu-pressed': 'inset 4px 4px 10px #070f1e, inset -3px -3px 8px #1a3260',
        'neu-hover':   '10px 10px 20px #060e1c, -7px -7px 16px #1e3870',
        'glow-gold':   '0 0 20px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.15)',
        'glow-blue':   '0 0 20px rgba(54,96,167,0.4), 0 0 40px rgba(54,96,167,0.2)',
        'inner-light': 'inset -2px -2px 6px rgba(255,255,255,0.04), inset 2px 2px 6px rgba(0,0,0,0.3)',
      },
      animation: {
        'float':         'float 6s ease-in-out infinite',
        'pulse-slow':    'pulse 4s ease-in-out infinite',
        'gradient-shift':'gradientShift 8s ease infinite',
        'fade-up':       'fadeUp 0.6s ease forwards',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

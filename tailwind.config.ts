import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#264D3B',
          light: '#3A6B52',
        },
        sage: {
          DEFAULT: '#7FAF97',
          light: '#B5D0C4',
          pale: '#EBF3EF',
        },
        honey: {
          DEFAULT: '#C4834A',
          light: '#E8B48A',
          pale: '#FAF0E6',
        },
        cream: {
          DEFAULT: '#FAFAF7',
          alt: '#F3F0EA',
          /** Fundo hero — tom quente próximo ao #FAF7F2 */
          warm: '#FAF7F2',
        },
        ink: {
          DEFAULT: '#1A201D',
          soft: '#343C38',
          muted: '#6E7870',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      borderRadius: {
        pill: '100px',
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.04)',
        md: '0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        lg: '0 16px 40px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

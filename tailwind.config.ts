import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /** Tons escuros de destaque (equivalente ao sage-dark + sage do termo) */
        forest: {
          DEFAULT: '#5e7252',
          light: '#8a9e7e',
        },
        sage: {
          DEFAULT: '#8a9e7e',
          light: '#b8c9af',
          /** Fundo muito claro com “sopro” de sage — não existe no HTML; deriva de cream + sage */
          pale: '#eef0eb',
        },
        honey: {
          DEFAULT: '#c9a96e',
          light: '#e2c99a',
          pale: '#f5efe4',
        },
        cream: {
          DEFAULT: '#faf8f0',
          alt: '#f0ede4',
          /** Papel / leitura — alinhado ao --white do termo */
          warm: '#fdfaf6',
        },
        ink: {
          DEFAULT: '#2e2a24',
          soft: '#5a5248',
          /** Texto secundário, um passo mais claro que ink-soft */
          muted: '#73695c',
        },
        /** --white do termo.html (substitui o branco puro do Tailwind neste projeto) */
        white: '#fdfaf6',
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

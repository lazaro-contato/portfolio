import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      brightRed: '#D74141',
      grayLight: '#6C6C6C',
      graySoft: '#AFAFAF',
      transparentGray: '#D7D7D7',
      brightBlue: '#4147D7',
      brightOrange: '#FF583B',
      softBlue: '#1073EB',
    },
    fontFamily: {
      nunito: ['nunito', 'sans-serif'],
      lato: ['lato, sans-serif'],
      granesta: ['Granesta', 'sans-serif'],
      figtree: ['Figtree', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        float: 'float 3s infinite',
        shake: 'shake 0.1s infinite',
        rotate: 'rotateItself 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(1%)' },
          '100%': { transform: 'translateX(-1%)' },
        },
        rotateItself: {
          from: { transform: 'rotateY(0deg)' },
          to: { transform: 'rotateY(360deg)' },
        },
      },
    },
    variants: {
      extend: {
        animation: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}
export default config

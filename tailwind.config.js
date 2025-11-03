/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      },
      scale: {
        '170': '1.7',
        '200': '2',
        '250': '2.5',
        '300': '3',
      }
      ,
      keyframes: {
        zoomGlow: {
          '0%': {
            transform: 'scale(0.86)',
            opacity: '0',
            textShadow: '0 0 0 rgba(99,102,241,0)',
            filter: 'drop-shadow(0 0 0 rgba(99,102,241,0))'
          },
          '22%': {
            transform: 'scale(1.14)',
            opacity: '1',
            textShadow: '0 0 20px rgba(99,102,241,0.98), 0 0 34px rgba(99,102,241,0.55)',
            filter: 'drop-shadow(0 8px 24px rgba(99,102,241,0.18))'
          },
          '65%': {
            transform: 'scale(1.02)',
            opacity: '0.95',
            textShadow: '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(99,102,241,0.35)'
          },
          '100%': {
            transform: 'scale(1.02)',
            opacity: '0',
            textShadow: '0 0 6px rgba(99,102,241,0.5), 0 0 12px rgba(99,102,241,0.2)'
          }
        }
      },
      animation: {
        'zoomGlow': 'zoomGlow 2.3s cubic-bezier(.2,.8,.2,1) forwards',
        'zoomGlow-delay': 'zoomGlow 2.3s cubic-bezier(.2,.8,.2,1) 0.08s forwards'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


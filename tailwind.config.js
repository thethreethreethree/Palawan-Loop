/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: sky blue. `brand` is the primary scooter-blue scale.
        brand: {
          50: '#eff9ff',
          100: '#dbf0ff',
          200: '#bfe6ff',
          300: '#93d8ff',
          400: '#5cc2ff',
          500: '#34a8f4', // primary
          600: '#1d8be0',
          700: '#1a6fb5',
          800: '#1c5d94',
          900: '#1d4f7a',
          950: '#13314f',
        },
        // Warm accent for adventurous/fun energy (sunsets, CTAs).
        sunset: {
          50: '#fff5ed',
          100: '#ffe8d4',
          200: '#ffcda8',
          300: '#ffaa70',
          400: '#ff7a36',
          500: '#ff5a10',
          600: '#f03d06',
          700: '#c72c07',
          800: '#9e240e',
          900: '#7f210f',
        },
        sand: '#fdfaf3',
        ink: '#0f2233',
      },
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(29, 79, 122, 0.25)',
        card: '0 8px 30px -12px rgba(15, 34, 51, 0.18)',
        glow: '0 0 0 4px rgba(52, 168, 244, 0.15)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}

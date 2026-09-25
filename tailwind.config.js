/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0b',
        panel: 'rgba(255,255,255,0.04)',
        'panel-strong': 'rgba(255,255,255,0.07)',
        muted: 'rgba(255,255,255,0.72)',
        line: 'rgba(255,255,255,0.1)',
        accent: '#e62429',
        'accent-soft': '#ff6a6e',
        nick: '#ff9a3c',
      },
      fontFamily: {
        display: ["'Bebas Neue'", 'sans-serif'],
        body: ["'Montserrat'", 'sans-serif'],
      },
      keyframes: {
        glow: {
          from: { textShadow: '0 0 20px rgba(230,36,41,0.6)' },
          to: { textShadow: '0 0 60px rgba(230,36,41,0.95)' },
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeIn: {
          to: { opacity: 1 },
        },
        heroReveal: {
          '0%': { opacity: 0, transform: 'scale(0.6)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        glow: 'glow 3s infinite alternate',
        heroFloat: 'heroFloat 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s forwards',
        heroReveal: 'heroReveal 2s forwards',
      },
      boxShadow: {
        card: '0 24px 70px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl2: '22px',
      },
    },
  },
  plugins: [],
}

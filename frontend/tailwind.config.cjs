const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f5edda',
        gold: '#d19c4c',
        'gold-dark': '#a9743b',
        brown: '#5c432c',
        neutral: '#3d2b1f',
      },
      fontFamily: {
        title: ['"MedievalSharp"', 'cursive'],
        text: ['"Uncial Antiqua"', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out both',
      },
    },
  },
  plugins: [
    require('daisyui'),
    plugin(({ addComponents, addUtilities }) => {
      addComponents({
        '.btn-rpg': {
          '@apply bg-gold hover:bg-gold-dark text-black py-2 px-6 rounded-full font-semibold transform transition active:scale-95 shadow-md hover:shadow-lg': {},
        },
        '.rpg-panel': {
          '@apply bg-parchment text-neutral p-6 rounded-xl shadow-lg': {},
          border: '8px solid transparent',
          borderImage: "url('/assets/frame.png') 32 round",
        },
        '.rpg-divider': {
          '@apply w-full h-1 bg-gold rounded': {},
        },
      })
      addUtilities({
        '.angle-divider': {
          '@apply relative h-16 w-full overflow-hidden': {},
        },
      })
    }),
  ],
  daisyui: {
    themes: [
      {
        rpg: {
          primary: '#a9743b',
          secondary: '#5c432c',
          accent: '#d19c4c',
          neutral: '#3d2b1f',
          'base-100': '#f5edda',
        },
      },
    ],
    defaultTheme: 'rpg',
  },
}

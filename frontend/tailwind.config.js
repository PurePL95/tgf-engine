/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                parchment:   '#f5edda',
                gold:        '#d19c4c',
                'gold-dark': '#a9743b',
                brown:       '#5c432c',
                neutral:     '#3d2b1f',
            },
            fontFamily: {
                title: ['"MedievalSharp"', 'cursive'],
                text:  ['"Uncial Antiqua"', 'serif'],
            },
        },
    },
    plugins: [
        require('daisyui'),
        plugin(({ addComponents, addUtilities }) => {
            addComponents({
                '.btn-rpg': {
                    '@apply bg-gold hover:bg-gold-dark text-black py-2 px-4 rounded font-semibold transition duration-200 shadow-md': {},
                },
                '.rpg-panel': {
                    '@apply bg-parchment border border-brown p-6 rounded-xl shadow-lg': {},
                },
                '.rpg-divider': {
                    '@apply h-1 bg-gold rounded': {},
                },
                '.rpg-input': {
                    '@apply w-full px-3 py-2 bg-base-100 border-2 border-brown rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-accent': {},
                },
                '.rpg-nav': {
                    '@apply bg-brown text-base-100 flex justify-between items-center p-4 rounded-b-xl shadow-lg font-title': {},
                },
                '.rpg-footer': {
                    '@apply bg-brown text-base-100 py-6 mt-12 text-center space-y-4 font-text': {},
                },
            })
            addUtilities({
                '.frame-rpg': {
                    border: '8px solid transparent',
                    'border-image': `url('/assets/frame.png') 32 round`,
                },
            })
        }),
    ],
    daisyui: {
        themes: [
            {
                rpg: {
                    primary:   '#a9743b',
                    secondary: '#5c432c',
                    accent:    '#d19c4c',
                    neutral:   '#3d2b1f',
                    'base-100': '#f5edda',
                },
            },
        ],
        defaultTheme: 'rpg',
    },
}

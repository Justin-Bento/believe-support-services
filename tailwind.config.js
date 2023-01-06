const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
        // candlelight
        primary: {
          '50': '#fefce8',
          '100': '#fef9c3',
          '200': '#fff089',
          '300': '#fee146',
          '400': '#fbcc13',
          '500': '#ebb407',
          '600': '#cb8a03',
          '700': '#a26206',
          '800': '#864d0d',
          '900': '#713f12',
        },
        secondary: {
          '50': '#edf9ff',
          '100': '#d7f0ff',
          '200': '#b8e6ff',
          '300': '#87d8ff',
          '400': '#4fc0ff',
          '500': '#26a1ff',
          '600': '#0f82ff',
          '700': '#086aed',
          '800': '#0d4eb0',
          '900': '#124a96',
        },
      }),
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),

  ],
}
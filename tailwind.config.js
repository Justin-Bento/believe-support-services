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
        primary: {
          '50': '#fcfde9',
          '100': '#f6fac7',
          '200': '#f3f692',
          '300': '#f2f15e',
          '400': '#ebe124',
          '500': '#dbc917',
          '600': '#bd9f11',
          '700': '#977411',
          '800': '#7d5d16',
          '900': '#6b4c18',
        },
        secondary: {
          '50': '#f4f7fb',
          '100': '#e7f0f7',
          '200': '#cadeed',
          '300': '#9bc2de',
          '400': '#65a3cb',
          '500': '#458cbc',
          '600': '#306b99',
          '700': '#28567c',
          '800': '#254a67',
          '900': '#233f57',
        },
      }),
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
    require('@tailwindcss/forms')
  ],
}
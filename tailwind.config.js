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
          '50': '#f9fbeb',
          '100': '#f3f7ca',
          '200': '#ebf098',
          '300': '#e4e75d',
          '400': '#deda32',
          '500': '#cec324',
          '600': '#b29c1c',
          '700': '#8e741a',
          '800': '#765c1d',
          '900': '#654d1e',
        },
        secondary: {
          '50': '#f1f9fe',
          '100': '#e1f3fd',
          '200': '#bde6fa',
          '300': '#83d3f6',
          '400': '#42bcee',
          '500': '#19a5de',
          '600': '#0c84bd',
          '700': '#0b6a99',
          '800': '#0d597f',
          '900': '#114b6a',
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
  plugins: [require('@tailwindcss/forms')],
}
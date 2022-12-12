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
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fce68b',
          '300': '#fbd34e',
          '400': '#fabe25',
          '500': '#f49d0c',
          '600': '#d87607',
          '700': '#b3530a',
          '800': '#91400f',
          '900': '#78350f',
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
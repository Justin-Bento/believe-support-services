const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          5: "hsla(212, 87%, 97%, 0.1)",
          50: "hsl(212, 87%, 97%)",
          100: "hsl(210, 88%, 94%)",
          200: "hsl(208, 86%, 86%)",
          300: "hsl(207, 88%, 74%)",
          400: "hsl(206, 85%, 60%)",
          500: "hsl(206, 81%, 48%)",
          600: "hsl(208, 90%, 39%)",
          700: "hsl(209, 89%, 32%)",
          800: "hsl(208, 83%, 27%)",
          900: "hsl(209, 74%, 24%)",
          950: "hsl(212, 73%, 16%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["OpenSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    // ...
  ],
};

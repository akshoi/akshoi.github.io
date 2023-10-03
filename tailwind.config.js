/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3F497F",
        secondary: "#7E93FF",
        tertiary: "#5E6EBF",
        background: "#F4F9FC",
        text: "#707070",
        white: "#FFFFFF"

      },
      fontFamily: {
        main: ["Bitter", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        BrightRed: "#f25f3a",
        DarkBlue: "#242d52",
        VeryLightGray: "#fafafa",
        DarkGrayishBlue: "#9095a7",
        VeryPaleRed: "#ffefeb",
        VeryDarkBlue: "#1d1e25",
      },
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      backgroundImage: {
        pattern: "url('/images/bg-tablet-pattern.svg')",
      },
    },
  },

  plugins: [],
};

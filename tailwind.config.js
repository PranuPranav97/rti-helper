const { join } = require("path");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    screens: {
      sm: { min: "100px", max: "480px" },
      // => @media (min-width: 480px) { ... }

      md: { min: "481px", max: "767px" },
      // => @media (min-width: 481px and max-width: 757px) { ... }

      lg: { min: "768px", max: "1024px" },
      // => @media (min-width: 768px and max-width: 1024px) { ... }

      xl: { min: "1025px", max: "1280px" },
      // => @media (min-width: 1025px and max-width: 1280px) { ... }

      "2xl": { min: "1281px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        navbar: "#031cfc",
        primary: "#031cfc",
      },
      keyframes: {
        lineThroughAnimation: {
          "0%": { textDecorationColor: "transparent" },
          "100%": { textDecorationColor: "inherit" },
        },
      },
      animation: {
        lineThrough: "lineThroughAnimation 1s forwards",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", // IE & Edge
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome & Safari
          },
        },
      });
    }),
  ],
};

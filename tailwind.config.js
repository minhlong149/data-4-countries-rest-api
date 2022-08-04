/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-text": "hsl(0, 0%, 100%)",
        "dark-background": "hsl(207, 26%, 17%)",
        "dark-element": "hsl(209, 23%, 22%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-background": "hsl(0, 0%, 98%)",
        "light-element": "hsl(0, 0%, 100%)",
        "light-input": "hsl(0, 0%, 52%))",
      },
      fontSize: {
        homepage: "16px",
        detail: "14px",
      },
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

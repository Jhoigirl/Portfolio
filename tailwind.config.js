// const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        dyna: ['"Dynalight"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

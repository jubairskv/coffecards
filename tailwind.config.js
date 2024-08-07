/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1B1D1F",
        "custom-dark": "#111315",
        "text-gray": "#6F757C",
        "color-gray": "#6F757C",
        "color-green": "#BEE3CC",
        "color-yellow": "#F6C768",
        "color-red": "#ED735D",
      },
      screens: {
        x: "350px",
        xs: "450px",
        xss: "250px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

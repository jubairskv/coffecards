/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1B1D1F",
        "custom-dark": "#111315", 
      },
    },
  },
  plugins: [],
};
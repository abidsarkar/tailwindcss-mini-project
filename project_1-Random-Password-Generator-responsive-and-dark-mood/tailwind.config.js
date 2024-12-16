/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",],
  theme: {
    extend: {
      colors: {
        'regal-green': '#019f55',
        'almost-black': '#002339',
      },
    },
  },
  plugins: [],
}


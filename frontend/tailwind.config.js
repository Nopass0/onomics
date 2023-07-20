/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./templates/frontend/*.html",
    "./templates/frontend/**/*.html",
    "./frontend/*.html",
    "./frontend/**/*.html",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [],
}
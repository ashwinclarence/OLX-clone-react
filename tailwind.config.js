/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olx-green': '#002F34',
        'olx-gray':'#EBEEEF',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors: {
        'orange': '#eb651c',
        'almost-white': '#fffaf7'
      }
    },
  },
  plugins: [],
}


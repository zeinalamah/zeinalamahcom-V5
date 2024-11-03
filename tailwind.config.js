/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3187',
        background: '#0E0F1F',
        text: '#F7F8F8',
      },
    },
  },
  plugins: [],
};
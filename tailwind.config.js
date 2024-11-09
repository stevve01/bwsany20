/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bmw-blue': '#1C69D4',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
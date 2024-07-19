// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['SUIT-Extrabold', 'sans-serif'],
        bold: ['SUIT-Heavy', 'sans-serif'],
      },
      colors: {
        'gray-dark': '#333333',
        'point-600': '#D1363A',
        'point-50': '#FDF5F5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'white': '#F0FDFB',
      'light': '#EDF5F4',
      'border': '#EDE3E3',
      'blue': '#035678',
      'green': '#87E4B2',
      'gray':'#7CA1A6'
    },
    extend: {
      boxShadow: {
        '3xl': '0px 4px 13px rgba(34, 34, 34, 0.29)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

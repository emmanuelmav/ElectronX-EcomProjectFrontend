/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange1': '#D87D4A',
        'orange2': '#FBAF85',
        'black2': '#101010',
        'grey1': '#F1F1F1',
        'grey2': '#FAFAFA',
      },
    }
  },
  plugins: [],
}

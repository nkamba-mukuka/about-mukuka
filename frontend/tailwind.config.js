/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Girly pastel palette
        'pink-pastel': '#FFD1DC',
        'pink-soft': '#FFB6C1',
        'lavender': '#E6E6FA',
        'lavender-dark': '#DDA0DD',
        'cream': '#FFF8DC',
        'peach': '#FFE5B4',
        'rose': '#FFC0CB',
        'mauve': '#E0B0FF',
      },
      fontFamily: {
        'girly': ['Comfortaa', 'cursive'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Altın sarısı
          dark: '#C9A100',
        },
        secondary: {
          DEFAULT: '#D1D5DB', // Gümüş/grimsi beyaz
        },
        background: {
          DEFAULT: '#181C23', // Koyu lacivert/siyah
        },
        text: {
          DEFAULT: '#F3F4F6', // Açık gri
        },
      },
    },
  },
  plugins: [],
} 
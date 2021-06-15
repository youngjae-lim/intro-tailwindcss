const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    // enabled: true,
    content: ['./src/**/*.jsx', './index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      mobile: '320px',
      tablet: '690px',
      sm: '769px',
      lg: '1025px',
      xl: '1201px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}

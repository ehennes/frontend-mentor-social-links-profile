const defaultTheme = require('tailwindcss/defaultTheme'); 

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        }
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gray': {
            light: '#333333',
            DEFAULT: '#1F1F1F',
            dark: '#141414'
        },
        'green': '#c5f82a'
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
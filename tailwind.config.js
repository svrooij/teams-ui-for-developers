module.exports = {
  content: [
    "./docs/**/*.html",
    "./docs/_includes/*.html",
    "./docs/_layouts/*.html",
    "./docs/index.html",
    "./_site/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teams: {
          50: '#5B5FC7',
          100: '#4f52b2',
          200: '#444791'
        },
        teamsbg: {
          50: '#f5f5f5',
          800: '#201f1f',
          900: '#242424'
        }
      }
      
    },
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif']
    },
    
  },
  plugins: [],
}

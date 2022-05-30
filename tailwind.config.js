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
        teamsb: {
          bg1: '#e8ebfa',
          bg2: '#3d3e78',
          bg3: '#4f52b2',
          bg4: '#444791',
          fg: '#5b5fc7',
          brb: '#9299f7',
        },
        teamsn: {
          bg: '#ffffff',
          bg2: '#f5f5f5',
          brd: '#d1d1d1',
          fg: '#242424',
          fg1: '#424242',
          fg2: '#616161',
          fgd: '#c7c7c7',
        },
        teamslight: {
          bg: '#ffffff',
          bg1: '#616161',
          bg2: '#424242',
          fg: '#242424'
        },
        teamsdark: {
          brd: '#000000',
          bg1: '#242424',
          bg2: '#1f1f1f',
          fg: '#ffffff'
        },

      }
      
    },
    fontFamily: {
      sans: ['Segoe UI', 'sans-serif']
    },
    
  },
  plugins: [],
}

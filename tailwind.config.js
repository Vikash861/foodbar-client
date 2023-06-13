/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow : {
        'pizza-shadow': '0 10px 8px rgb(252,232,224)',
      },
      backgroundImage : {
        'food_doodle' : "url('/src/assets/images/food_doodle.svg')",
        'food' : "url('/src/assets/images/food.jpg')",
      },

      fontFamily: {
        'sans' : ['Open Sans', 'sans-serif'],
        'Lobster':['Lobster','cursive']
      },
      colors: {
        'custom-red' : '#eb5030',
        'primary' : '#ffffff',
        'secondary' : '#fdf5f5',
        'bold': '#2e2e2e',
        'medium': '#3b3a3a',
        'light': '#5b5756',
        '200' : '#e2e8f0',
        'textbox-border': '#f4b3af',
        'textbox-bg' : '#f4eef2',
        'grayish' : '#323232'
      },
      margin : {
        '20%' : '20%'
      },
      keyframes: {
        ripple: {
          '0%': { width : '0px', height : '0px', opacity : 0.5},
          '100%': {width : '300px', height : '300px', opacity : 0},
        },
      },
      animation : {ripple: 'ripple 0.5s linear infinite'},
    },
  },
  plugins: [],
}
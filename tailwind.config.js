/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
     
      'purple': '#52154E',
      'light-blue': "#DAE0F2",
      'black': "#000000",
      'white': "#FFFFFF",
      'floral-white': "#FFF8F0",
    },
    fontFamily: {
      'font-family': ['Roboto Mono', 'monospace']
      
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
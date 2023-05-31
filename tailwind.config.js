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
      'google': ['Roboto Mono', 'monospace']
      
      
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'xs': '0.75rem',   // Extra small font size
        'sm': '0.875rem',  // Small font size
        'base': '1rem',    // Base font size (default)
        'lg': '1.125rem',  // Large font size
        'xl': '1.25rem',   // Extra large font size
        '2xl': '1.5rem',   // Twice the base font size
        '3xl': '1.875rem', // Three times the base font size
        '4xl': '2rem', // Four times the base font size

      },
    }
  }
}
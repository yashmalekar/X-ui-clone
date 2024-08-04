/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      textDecorationThickness:{
        2:'4px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.underline-thickness':{
          'text-decoration-thickness':'4px'
        },
      });
    },
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Jost', 'ui-sans-serif', 'system-ui'],
      },
      fontweight:{
        medium:'500',
      },
      colors:{
        current:{
          dark: '#11423F',
          cream: '#efeae2',
          salmon: '#E88D87'
        }
      }
    },
  },
  plugins: [],
}
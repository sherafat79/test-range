/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 
    extend: {
      colors: {
        primary: "#065A75",
        secondary: "#003546",
      },
      fontFamily:{
        "iranSans":["iranSans"],
      }
    },
  
},
  plugins: [],
}

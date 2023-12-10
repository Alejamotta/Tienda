/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
        'abrir': "url('../icons/menu-regular-24.png')",
        'cerrar': "url('../icons/x-regular-24.png')"
      }
    },
  },
  plugins: [],
}
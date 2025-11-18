/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Busca archivos HTML directamente en la raíz del proyecto
    "./src/**/*.{js,jsx,ts,tsx}", // Busca archivos JS/JSX/TS/TSX en la carpeta 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customGreen50: '#f2fbf9',
        customGreen100: '#d4f3ed',
        customGreen200: '#a9e6db',
        customGreen300: '#76d2c6',
        customGreen400: '#49b8ac',
        customGreen500: '#36b0a5',
        customGreen600: '#247d77',
        customGreen700: '#216460',
        customGreen800: '#1e514f',
        customGreen900: '#1d4442',
        customGreen950: '#0b2828',
      },
    },
  },
  plugins: [],
}


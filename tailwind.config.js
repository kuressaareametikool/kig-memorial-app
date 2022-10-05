const { formatMessages } = require('esbuild');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'home': "url('/assets/images/bg-fog.png')"
        }
      },
    },
    plugins: [],
  }
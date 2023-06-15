/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          dark: "#000000",
          primary: "#ED5E93",
          secondary: "#FFF6F9",
        }
      },
      fontFamily: {
        sans: ["var(--font-raleway)"]
      }
    },
  },
  plugins: [],
}

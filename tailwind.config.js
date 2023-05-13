/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#202232",
        "primary-foreground": "#FFFFFF",
        "primary-light": "#282B3E",
        "primary-light-foreground": "#FFFFFF",
        "secondary": "#F14156",
        "secondary-foreground": "#FFFFFF",
        "secondary-light": "#F25467",
        "secondary-light-foreground": "#FFFFFF",
      }
    },
  },
  plugins: [],
}
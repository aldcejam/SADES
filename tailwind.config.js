/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: "#D31027",
        secondary: "#FD9A01",

        background: "rgb(var(--background))",
        background_gradient: "rgb(var(--background-gradient))",
        inverted_theme: "rgb(var(--inverted-theme))",
        absolute_theme: "rgb(var(--absolute-theme))",

        title: "rgb(var(--title))",
        subtitle: "rgb(var(--subtitle))",
        text: "rgb(var(--text))",
        info: "rgb(var(--info))",
        success: "rgb(var(--success))",
        warning: "rgb(var(--warning))",

        gray_100: "rgb(var(--gray-100))",
        gray_200: "rgb(var(--gray-200))",
        gray_300: "rgb(var(--gray-300))",
        gray_400: "rgb(var(--gray-400))",
        gray_500: "rgb(var(--gray-500))",
        gray_600: "rgb(var(--gray-600))",
        gray_700: "rgb(var(--gray-700))",
        gray_800: "rgb(var(--gray-800))",
        gray_900: "rgb(var(--gray-900))",
      },
      screens: {
        xs: "450px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      },
      borderRadius: {
        default: "5px",
      },
      boxShadow: {
        1: "var(--shadow-1)",
        2: "var(--shadow-2)",
      }
    },
  },
  plugins: [],
}
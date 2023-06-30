/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,scss}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#c43a3a",
        secondary: "#f07e14",

        background: "var(--background)",
        background_gradient: "var(--background-gradient)",
        inverted_theme: "var(--inverted-theme)",

        title: "var(--title)",
        subtitle: "var(--subtitle)",
        text: "var(--text)",
        info: "var(--info)",

        gray_100: "var(--gray-100)",
        gray_200: "var(--gray-200)",
        gray_300: "var(--gray-300)",
        gray_400: "var(--gray-400)",
        gray_500: "var(--gray-500)",
        gray_600: "var(--gray-600)",
        gray_700: "var(--gray-700)",
        gray_800: "var(--gray-800)",
        gray_900: "var(--gray-900)",
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
      }
    },
  },
  plugins: [],
}
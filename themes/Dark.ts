import { createTheme } from "@mui/material/styles";

export const DarkTheme = (mainColor: string, secondaryColor: string) => {
  return createTheme({
    palette: {
      common: {
        black: "#000000",
        white: "#ffffff",
      },
      primary: {
        main: mainColor,
        contrastText: "#F0F0F0",
        light: "#0D0D0D",
        dark: "#ffffff"
      },
      secondary: {
        main: secondaryColor,
        dark: "#000000"
      },
      info: {
        main: "#00D1FF",
      },
      success: {
        main: "#53ED62",
      },
      grey: {
        "600": "#161616",
        "900": "#101010",
      },
      text: {
        /* title */
        primary: "#FBFBFB",
        /* Subtitle */
        secondary: "#D7D7D7",
      },
      background: {
        paper: "#211f1f",
        default: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
      },
      divider: "#211f1f1a",
      action: {
        active: "#fff",
        disabled: "#000",

      },
    },
    breakpoints: {
      values: {
        xs: 450,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    shape: {
      borderRadius: 5
    },
    shadows: [
      "none",
      "inset 3px 3px 3px #353232, inset -3px -3px 3px #1b1919",
      "inset 3px 3px 3px #1b1919, inset -3px -3px 3px #1b1919",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ],
  });
};

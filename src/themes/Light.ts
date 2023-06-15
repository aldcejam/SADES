import {createTheme} from "@mui/material/styles";


export const LightTheme = (mainColor: string, secondaryColor:string) => {
  
  return createTheme({
    palette: {
      common:{
        black: "#000000",
        white: "#ffffff"
      },
      primary: {
        main: mainColor,
        contrastText: "#161616",
        light: "#D8D8D8",
        dark: '#000000',
        "50": "#F2F2F2"

      },
      secondary: {
        main: secondaryColor,
        dark: '#ffffff'
      },
      info:{
        main: "#00D1FF"
      },
      success:{
        main: "#53ED62"
      },
      grey: {
        "600": "#BCBCBC",
        "900": "#D6D6D6",
      },
      text: {
        /* title */
        primary: "#0e0e0e",
        /* Subtitle */
        secondary: "#151515",
      },
      background: {
        paper: "#dbdbdb",
        default: `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 100%)`,
      },
      divider: "#d9d9d91a",
      action: {
        active: "#000",
        disabled: "#fff",
      },
      
    },
    shape:{
      borderRadius: 5
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
    shadows: [
      "none",
      "inset 3px 3px 3px #ededed, inset -3px -3px 3px #c6c6c6",
      "inset 3px 3px 3px #c6c6c6, inset -3px -3px 3px #c6c6c6",
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

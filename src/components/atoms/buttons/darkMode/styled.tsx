"use client"
import { styled } from "@mui/material/styles";

type themeselected = {
  themeselected: any;
};

export const StylesButtonDarkMode = styled("div")<themeselected>(({ themeselected, ...props }) => `
  position: relative;
  z-index: 10;
  width: 60px;
  height: 28px;
  display: flex;
  background-color: ${props.theme.palette.background.paper};
  display: flex;
  justify-content: ${themeselected == "light" ? "flex-end" : "flex-start"};
  border-radius: 50px;
  padding: 2px;
  cursor: pointer;
  border: 1px solid ${themeselected == "light" ? "#00000067" : "#ffffff67"};;
  box-sizing: content-box;
  
  .handle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    background: ${props.theme.palette.background.default};
    border: 1px solid ${themeselected == "light" ? "#00000067" : "#ffffff67"};;
    border-radius: 40px;
    
    .icon{
      font-size: 1rem;
      color: ${themeselected == "light" ? "#fff" : "#000"};

    }
}
  `
);

"use client"
import { styled } from "@mui/material";

export const Modal = styled("span")`
  #modal-portal {
    position: absolute;
    z-index: 91;
    width: 0px;
    height: 0px;
 
  }
  #modal {
    *{
        ::-webkit-scrollbar {
        width: 12px;
      }
    
      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.palette.primary.dark}b5;
        border-radius: 10px;
      }
    
      ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.palette.primary.dark};
      }
      }
    position: absolute;
    top: 0;
    display: none;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.palette.background.paper}a4;
    backdrop-filter: blur(10px);
  }

`;

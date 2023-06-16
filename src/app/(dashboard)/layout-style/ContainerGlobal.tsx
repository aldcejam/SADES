"use client"
import { styled } from "@mui/material"; 

const ContainerGlobal = styled("div")`
  position: absolute;
  width: min(90vw, 1000px);
  left: 0;
  right: 0;
  top: 5vh;
  margin: auto;
  ${(props) => props.theme.breakpoints.down("sm")} {
    width: min(100vw, 1000px);
    top: 0vh;
  }

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
  /* default styles */
  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
  }
  
`;

export default ContainerGlobal;

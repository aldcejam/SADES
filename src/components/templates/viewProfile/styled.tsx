"use client"
import { styled } from "@mui/material/styles";

export const StyledViewProfile = styled("main")`
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  overflow-y: hidden;
  box-shadow:  ${(props) => props.theme.shadows[1]} ;
  border-radius: 20px;
  border: 0px solid ${(props) => props.theme.palette.primary.main};
  border-top-width: 2px; 
  box-shadow: inset -7px 7px 14px 0px  ${(props) => props.theme.palette.primary.main}a1;
  
  /* Decoration */
  &::before {
    content: "";
    position: absolute;
    width: 101%;
    z-index: 12;
    min-height: 100%; 
    background-color: #08080855;
     background-color: ${(props) => props.theme.palette.secondary.dark}55;
    backdrop-filter: blur(15px);
    z-index: 10;
    border-radius: 20px;
 
  }
  .dimont-polygon {
    position: absolute;
    width: 140%;
    max-height: 100%;
    top: 10%;
    left: -40px;
    opacity: 0.9;
  }
  /* Decoration */

`;

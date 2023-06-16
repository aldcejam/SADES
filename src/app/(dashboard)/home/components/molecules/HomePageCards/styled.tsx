"use client"
import { styled } from "@mui/material/styles";

export const StyledHomePageCard = styled("article")`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  overflow: hidden;
  text-transform: capitalize;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background-color: ${(props) => props.theme.palette.background.paper};
  box-shadow: 5px 5px 12px ${(props) => props.theme.palette.secondary.main}4c,
    inset 5px 5px 23px ${(props) => props.theme.palette.primary.dark}19;
  overflow: hidden;

  border-top: 1px solid ${(props) => props.theme.palette.primary.main}bc;
  border-left: 1px solid ${(props) => props.theme.palette.primary.main}bc;
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary.main}bc;
  border-right: 1px solid ${(props) => props.theme.palette.secondary.main}bc;

  ${(props) => props.theme.breakpoints.down("sm")} {
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
  }
  &:hover { 
    transform: scale(0.98);
    filter: saturate(1.2);
  }

  .title{
    position: absolute;
    z-index: 10;
    margin: 20px;
    h2 {
      margin: 0;
      color: ${(props) => props.theme.palette.text.primary};
      font-size: 1.3rem;
    }
    h3 {
      margin: 0;
      color: ${(props) => props.theme.palette.text.secondary}d5;
      font-size: 0.7rem;
    }  
  }

`;

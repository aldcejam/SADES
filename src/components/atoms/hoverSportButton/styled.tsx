"use client"
import {styled} from "@mui/material/styles";

export const StyedHoverSportButton = styled("button")`
  position: relative;
  width: clamp(120px, 20vw, 250px);
  padding: 10px 0;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: capitalize;
  border: 0;
  background-color: transparent;
  
  ::before{
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.palette.primary.light}3a;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: ${(props) => props.theme.palette.primary.dark}3a 1px solid;
    
  }
  
  &:hover {
    transition: 0.4s;
    transform: scale(1.05);
    &::before{
      background-color: ${(props) => props.theme.palette.primary.light}8a;
    }
  }
  
  span{
    position: relative;
    z-index: 2;
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`;

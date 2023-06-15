"use client"
import { styled } from "@mui/material/styles";

export const RedirectIconsSidebarStyled = styled("li")`
  width: 200px;
  height: 25px;
  position: relative;
  display: flex;
  gap: 15px;
  cursor: pointer;  
  .icon{  
    display: flex;
    align-items: baseline;
    
    svg{
      font-size: 1.7rem;
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
  p {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: bold;
    font-size: 1.1rem;
    margin: 7px 0;
  }
`;

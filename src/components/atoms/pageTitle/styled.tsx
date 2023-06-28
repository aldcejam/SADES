"use client"
import { styled } from "@mui/material/styles";

export const StyledPageTitle = styled('h1')`
    position: relative;
    display: inline-block;
    font-size: 1.8rem;
    margin-top: 11px;
    margin-bottom: 5px; 
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
    overflow-x: hidden;
    font-weight: bolder;
    ${(props) => props.theme.breakpoints.down('sm')} {
      margin-top: 0px;
    }
    .subtitle{
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0px;
      text-transform: capitalize;
    }
    

`
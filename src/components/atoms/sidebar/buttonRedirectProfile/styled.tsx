"use client"
import { styled } from "@mui/material/styles";

export const StyledButtonRedirectProfile = styled('div')`
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px; 
    cursor: pointer; 
    margin-left: -2px;
    p {
      color: ${(props) => props.theme.palette.text.primary};
      font-weight: bold;
      font-size: 1.1rem;
    }
`
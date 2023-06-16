"use client"
import { styled } from "@mui/material";

export const StyledDisplayDecorationLogin = styled("div")`
    flex-basis: 45%; 
    display: grid;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary.light}a2;
    border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
    border-bottom-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
    ${({ theme }) => theme.breakpoints.up('lg')} {
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    }
    ${({ theme }) => theme.breakpoints.down('md')} {
        display: none;
    }

    
`
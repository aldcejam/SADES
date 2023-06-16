"use client"
import { styled } from "@mui/material";

export const StyledForgotPassword = styled("div")`
    position: relative;
    text-align: right;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.palette.text.secondary};
    cursor: pointer;
    &:hover p{
        color: ${({ theme }) => theme.palette.text.primary}df;
    }
    
    p{
        transition: 0.3s;
        margin: -10px 0 0 0;
    }

`
    
"use client"
import { styled } from "@mui/material";

export const StyledTitles = styled("div")`
    text-align: center;
    h1{
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 1.9rem;
        margin: 0;
    }
    h2{
        color: ${({ theme }) => theme.palette.text.secondary}98;
        font-size: 0.9rem;
        margin: 0 0 40px;
        font-weight: 400;
        line-height: 14px;
        


    }
`
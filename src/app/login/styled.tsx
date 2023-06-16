"use client"
import { styled } from "@mui/material";

export const ContainerLogin = styled("div")`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: min(100vw, 1200px);
    height: min(100vh, 800px);
`

export const StyledLogin = styled("div")`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    ${({ theme }) => theme.breakpoints.down('md')} {
        justify-content: center;
        padding: 0 10px;
    }
`



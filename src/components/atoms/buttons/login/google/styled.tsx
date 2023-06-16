"use client"
import { styled } from "@mui/material";

export const StyledButtonLoginGoogle = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    background-color: #383838;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        transition: 0.5s;
        transform: scale(1.1);
        border: solid 1px ${({ theme }) => theme.palette.primary.dark}60;
    }
    .icon{
        color: #ffffff;

    }
`
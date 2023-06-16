"use client"
import { styled } from "@mui/material";

export const StyledAvailableTeams = styled("div")`
    text-align: center;
    color: ${({ theme }) => theme.palette.text.primary};
    h2{
        font-weight: 600;
    }
    .box-teams{
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        padding: 0px 20px;
    }
    h3{
        font-size: 0.7rem;
        font-weight: 300;
        margin: 5px 0 0 0;
    }
`
"use client"
import { styled } from "@mui/material";

export const StyledAuthenticationTemplate = styled("div")`
    flex-basis: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    .content{
        position: absolute;
        width: 100%;
        max-width: 400px;
        margin-top: 60px;

        ${({ theme }) => theme.breakpoints.down('xs')} {
            padding: 0 20px;
        
        }
    }
    
`
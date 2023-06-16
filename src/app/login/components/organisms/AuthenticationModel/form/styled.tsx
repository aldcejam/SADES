"use client"
import { styled } from "@mui/material";

export const StyledForm = styled("form")`
    
        display: flex;
        flex-direction: column;
        gap: 20px;
    
    .submit{
        width: 100%;
        padding: 15px 0;
        background-color: ${({ theme }) => theme.palette.primary.main};
        border: 1px solid ${({ theme }) => theme.palette.primary.dark};
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;
        color: ${({ theme }) => theme.palette.primary.contrastText};
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        box-shadow: 5px 5px 19px -3px ${({ theme }) => theme.palette.primary.dark}30;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            filter: grayscale(30%); 
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
            box-shadow: 5px 5px 19px -3px ${({ theme }) => theme.palette.primary.dark}30;
        }
    }
`
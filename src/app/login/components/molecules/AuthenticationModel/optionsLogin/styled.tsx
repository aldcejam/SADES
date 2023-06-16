"use client"
import { styled } from "@mui/material";

export const StyledOptionsLogin = styled("div")`

    margin-top: 30px;
    .title{
        position: relative;
        font-size: 1.3rem;
        text-align: center;
        font-weight: 600;
        color: ${({ theme }) => theme.palette.text.primary};

        &::before, &::after{
            content: "";
            position: absolute;
            top: 50%;
            width: 30%;
            height: 2px;
            background-color: ${({ theme }) => theme.palette.text.primary}; 
            ${({ theme }) => theme.breakpoints.down('xs')} {
                width: 25%;
            }
        }
        &::before{
            left: 0;
        }
        &::after{
            right: 0;
        }

    }
    .account-options{
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 10px;
        font-weight: 900;
    }

`
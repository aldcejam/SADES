"use client"
import { styled } from "@mui/material/styles";

export const StyledSituationsButton = styled("button")`
    width: min(100%, 230px);
    padding: 7px 10px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid ${({ theme }) => theme.palette.primary.dark};
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    
    background-color: ${({ theme }) => theme.palette.background.paper}c9;
    :hover{
        background-color: ${({ theme }) => theme.palette.background.paper};
        border: 1px solid ${({ theme }) => theme.palette.secondary.main};
        
    }
    &[data-is-active="true"]{
        transition: 0.3s;
        background: ${({ theme }) => theme.palette.background.default};
    }
    .content{
        display: flex;
        align-items: baseline;
        p{
            margin: 0;
            text-align: left;
            font-weight: 600;
            color: ${({ theme }) => theme.palette.primary.contrastText};
            font-size: 1rem;
            text-transform: capitalize;
        }
        .ball{
            width: 14px;
            height: 14px;
            border-radius: 50%;
            margin-right: 7px;
        }
        .blue-ball-illustration{
            background-color: ${({ theme }) => theme.palette.info.main};
        }
        .blue-green-illustration{
            background-color: ${({ theme }) => theme.palette.success.main};
        }

    }

`
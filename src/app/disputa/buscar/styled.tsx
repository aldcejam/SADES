"use client"
import { styled } from "@mui/material/styles" 

export const StyledFindGame = styled('div')`
    .content{
        padding-top: 50px;
    }
    .background{ 
        &::before{
            overflow: hidden;
            content: "";
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: clamp(220px, 25vw, 290px);
            height: clamp(220px, 25vw, 290px);
            background-color: ${props => props.theme.palette.secondary.main}c7;
            box-shadow: 0px 20px 32px 20px ${props => props.theme.palette.secondary.main}33;
            border-radius: 1000px;
            filter: blur(21px);
        }
        
    }

`
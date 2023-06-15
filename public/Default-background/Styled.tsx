"use client"
import { styled } from "@mui/material/styles";

export const ContainerBackgroundPage = styled('div')`
    position: fixed;
    
    `

export const StyledBackgroundPage = styled('div')`
    
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.palette.background.paper};
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    &::before{
        z-index: 10;
        content: '';
        position: absolute;
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(3px);
        ${props => props.theme.breakpoints.down('sm')}{
            backdrop-filter: blur(6px);
        }
        
    }
    &.login-page{
        &::before{
            ${props => props.theme.breakpoints.down('md')}{
                backdrop-filter: blur(0px);
            }
        }

    }
    
`
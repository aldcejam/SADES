"use client"
import { styled } from "@mui/material/styles";

export const StyledCourseCard = styled("div")`
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    .container-logo{
        box-shadow: ${({ theme }) => theme.shadows[1]};
        border-radius: ${({ theme }) => theme.shape.borderRadius}px;
        padding: 10px;
        width: 90px;
        height: 90px;
        transition: 0.6s;
        
        &[data-card-Selected="true"]{
            transition: 0.3s;
            background-color: ${({ theme }) => theme.palette.background.paper};
            box-shadow: 0px 3px 10px 2px ${({ theme }) => theme.palette.secondary.main};
        }
    }
    .logo{
        position: relative;
        width: 70px;
        height: 70px;
    }
    p{
        color: ${({ theme }) => theme.palette.text.primary};
        margin: 10px;
    }

`
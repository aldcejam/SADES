"use client"
import { styled } from "@mui/material";

export const StyledLogoCourses = styled("div")`
        
    position: relative;
      grid-area: cards;
      width: 100%;
      display: flex;
      gap: 20px;
      justify-content: center;

      .card{
        cursor: help;
        .image {
          position: relative;
          width: 80px;
          height: 80px;
          
        }
        h2{
          text-align: center;
          margin: 2px;
          color: ${(props) => props.theme.palette.text.primary};
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.8rem;
        }
      }
`
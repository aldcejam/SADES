"use client"
import { styled } from "@mui/material/styles";

export const StyledDisputaListar = styled("div")`
 
  .decoration {
    background-color: ${(props) => props.theme.palette.secondary.main}c5;
    width: clamp(260px, 31vw, 330px);
    height: clamp(260px, 31vw, 330px);
    border-radius: 31000px;
    filter: blur(20px);
    bottom: -50px;
    right: -50px;
  }
`;

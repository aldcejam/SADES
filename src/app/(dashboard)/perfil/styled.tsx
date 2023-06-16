"use client"
import {styled} from "@mui/material/styles";

export const StyledPerfil = styled("div")`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  ${(props) => props.theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  } 
  
`;


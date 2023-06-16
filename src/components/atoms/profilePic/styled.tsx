"use client"
import {styled} from "@mui/material/styles";

export const StyleProfilePic = styled('div')`
        border-radius: 100%;
        border: 2px solid white;
        div{
          position: relative;
          height: 100%;
          width: 100%;
          border: 2px solid ${(props) => props.theme.palette.primary.main};
          border-radius: 100%;
          overflow: hidden;
           
        }
`
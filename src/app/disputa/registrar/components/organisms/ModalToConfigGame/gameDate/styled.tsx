"use client"
import { styled } from "@mui/material";

export const StyledGameDate = styled("div")`
.title{
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 15px;
        margin-bottom: 26px;
        color: ${props => props.theme.palette.text.primary};
    }
 
.MuiOutlinedInput-root {
      & fieldset {
          border: solid 2px ${(props) => props.theme.palette.primary.dark};
          border-radius: ${(props) => props.theme.shape.borderRadius};
        }
        &.Mui-focused fieldset {
          border: solid 2px ${(props) => props.theme.palette.primary.main};
      }
    }

`
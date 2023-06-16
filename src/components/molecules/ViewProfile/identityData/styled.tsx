"use client"
import {styled} from "@mui/material/styles";

export const StyledIdentity = styled("div")`
    text-align: center;
      .main-data--name {
        margin: 10px 0;
        font-size: 1.2rem;
        text-transform: capitalize;
        color: ${(props) => props.theme.palette.text.primary};
      }
      .main-data--matriculation {
        margin: 10px 0 0;
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.palette.text.secondary};
      }
      .main-data--course {
        margin: 2px 0;
        font-size: 1rem;
        font-weight: 500;
        color: ${(props) => props.theme.palette.text.secondary};
        text-transform: capitalize;
      }
      .main-data--bio {
        color: ${(props) => props.theme.palette.primary.contrastText};
      }
    
`
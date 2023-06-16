"use client"
import {styled} from "@mui/material/styles";

export const StyledSocialMidias = styled("div")`
display: flex;
      flex-wrap: wrap;
      gap: 20px;
      width: 100%;
      justify-content: space-between;
      margin-top: 25px;
      .social-midias--twitter,
      .social-midias--instagram {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }
      .twitter--icon,
      .instagram--icon {
        position: relative;
        width: 24px;
        height: 24px;
      }
      p {
        font-size: 1.1rem;
        color: ${(props) => props.theme.palette.primary.contrastText};
        margin: 0;
      }

`
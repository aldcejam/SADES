"use client"
import { styled } from "@mui/material/styles";

export const StyledTitle = styled("div")`
  text-align: center;
  h2 {
    margin: 0;
  }
  h3 {
    color: ${(props) => props.theme.palette.text.secondary}cc;
    margin: 4px 0 50px;
    font-size: 0.8rem;
    letter-spacing: -0.3px;
    font-weight: 400;
  }
`;

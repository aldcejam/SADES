"use client"
import { styled } from "@mui/material";

export const StyledButtonLogOut = styled("div")`
  display: flex;
  gap: 15px;
  .icon {
    width: 22px;
    height: 22px;
  }
  p {
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 3px;
    margin-bottom: 0;
  }
`;

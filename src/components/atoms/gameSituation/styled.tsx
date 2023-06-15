"use client"
import { styled } from "@mui/material/styles";

export const StyledGameSituation = styled("div")`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 4px;

  p {
    font-size: 0.7rem;
    margin: 0;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid white;
    border-radius: 100px;
    background-color: ${(props) => props.theme.palette.success.light};
  }
`;

"use client"
import { styled } from "@mui/material";

export const StyledGameListByWeekDay = styled("div")`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${(props) => props.theme.breakpoints.down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-auto-rows: 140px;
  gap: 20px;
`;

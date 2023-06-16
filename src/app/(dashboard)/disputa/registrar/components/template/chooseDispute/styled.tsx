"use client"
import { styled } from "@mui/material";

export const StyledChooseDispute = styled("div")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 65%;
  margin: 0 auto;
  padding: 0 10px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

"use client"
import { styled } from "@mui/material";

export const StyledWeekDay = styled("h3")`
  color: ${(props) => props.theme.palette.text.primary};
  text-align: right;
  padding-bottom: 7px;
  border-bottom: 1px solid ${(props) => props.theme.palette.primary.main};
  font-size: 1.2rem;
  font-weight: 400;
`;

"use client"
import { styled } from "@mui/material/styles";

export const StyledPontuation = styled("div")`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  column-gap: 25px;
  row-gap: 0px;
  div {
    display: flex;
    gap: 10px;
    align-items: baseline;
    p {
      font-size: 1.3rem;
      color: ${(props) => props.theme.palette.text.primary};
      font-weight: 600;
    }
    input {
      background-color: ${(props) => props.theme.palette.background.paper};
      border: 2px solid ${(props) => props.theme.palette.primary.dark};
      border-radius: ${(props) => props.theme.shape.borderRadius}px;
      color: ${(props) => props.theme.palette.text.secondary};
      font-size: 1.6rem;
      padding: 7px 10px 7px 6px;
      width: 70px;
      transition: 0.3s;

      :focus {
        outline: none;
        border: 2px solid ${(props) => props.theme.palette.primary.main};
        color: ${(props) => props.theme.palette.text.primary};
      }
    }
  }
`;

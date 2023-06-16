"use client"
import {styled} from "@mui/material/styles";

export const StyledModifyBio = styled("div")`
  grid-area: bio-message;
  textarea {
    background-color: transparent;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    width: 100%;
    height: 90px;
    resize: none;
    padding: 10px 0 0 10px;
    border: 2px solid ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1rem;
    transition: 0.3s;

    &.input-error {
      border: 2px solid ${(props) => props.theme.palette.error.main};
      color: ${(props) => props.theme.palette.error.main};
    }
    &:focus {
      outline: 0;
      border: 2px solid ${(props) => props.theme.palette.primary.dark};
    }
  }
`;

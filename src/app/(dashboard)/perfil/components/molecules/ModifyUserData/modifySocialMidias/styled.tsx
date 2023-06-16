"use client"
import {styled} from "@mui/material/styles";

export const StyledModifySocialMidias = styled("div")`
  display: grid;
  gap: 10px;

  .input-material-ui {
    width: 100%;
    transition: 0.3s all;
    input {
      display: flex;
      align-items: center;
      background-color: transparent;
      border-radius: ${(props) => props.theme.shape.borderRadius};
    }
    .MuiOutlinedInput-root {
      & fieldset {
        border: solid 2px ${(props) => props.theme.palette.primary.main};
        border-radius: ${(props) => props.theme.shape.borderRadius};
      }
      &.Mui-focused fieldset {
        border: solid 2px ${(props) => props.theme.palette.primary.dark};
      }
    }
  }

  &.input-error {
    color: ${(props) => props.theme.palette.error.main};
    .MuiOutlinedInput-root {
      & fieldset {
        border: 2px solid ${(props) => props.theme.palette.error.main} !important;
      }
      &.Mui-focused fieldset {
        border: 2px solid ${(props) => props.theme.palette.error.main} !important;
      }
    }
  }
`;

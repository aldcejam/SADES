"use client"
import {styled} from "@mui/material/styles";

export const StyledModifyCourse = styled("div")`
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
    MuiInputLabel-root {
      padding-bottom: 10px;
    }
  }
`
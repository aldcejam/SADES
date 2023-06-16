"use client"
import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";

export const StyledSelectPontuations = styled(FormControl)`
  width: 100%;

  .container-select{

    .icon{
      position: absolute;
      right: 10px;
      bottom: 13px;
      transform: rotate(90deg);
      color: ${(props) => props.theme.palette.primary.dark};
      font-size: 1.5rem;
    }
    .select:focus{
      outline: none;

    }

    .select {
      width: 100%;
      height: 50px;
      border: solid 2px ${(props) => props.theme.palette.primary.dark};
      border-radius: ${(props) => props.theme.shape.borderRadius}px;
      background-color: ${(props) => props.theme.palette.background.paper};
      color: ${(props) => props.theme.palette.text.primary};
      padding: 0 10px;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 500;
      transition: 0.3s;
      &:hover {
        border: solid 2px ${(props) => props.theme.palette.primary.main};
      }
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  
      
    }
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 26px;
    color: ${(props) => props.theme.palette.text.primary};
  }
`;

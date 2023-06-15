"use client"
import { styled } from "@mui/material/styles";

export const StyledButtonSelectGender = styled("article")`
  
  position: relative;
  text-align: center;
  padding: 10px;
  border-top: 2px solid ${(props) => props.theme.palette.primary.main}a1;
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary.main}a1;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  box-shadow: inset -5px -5px 10px
  ${(props) => props.theme.palette.secondary.main}3f;
  cursor: pointer;
  transition: 0.3s;
  :before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    box-shadow: inset 5px 5px 10px
    ${(props) => props.theme.palette.primary.main}3f;
    
  }
  &[data-is-selected="true"]{
    border-top-width: 4px ;
    border-bottom-width: 4px solid;
    border-top: 2px solid ${(props) => props.theme.palette.secondary.main};
    border-bottom: 2px solid ${(props) => props.theme.palette.primary.main};
    border-radius: ${(props) => props.theme.shape.borderRadius};
    box-shadow: inset -5px -5px 10px
    ${(props) => props.theme.palette.primary.main}97;
    background: ${(props) => props.theme.palette.primary.dark}12;
    :before{
        box-shadow: inset 5px 5px 10px
        ${(props) => props.theme.palette.secondary.main}97;
      }
  }

  .illustration {
    position: relative;
    width: 90px;
    height: 90px;
    ${(props) => props.theme.breakpoints.down("xs")} {
      width: 100px;
      height: 100px;
    }
  }
  p {
    position: relative;
    margin: 15px 0 0 0;
    bottom: 0px;
    color: ${(props) => props.theme.palette.text.primary};
    text-transform: capitalize;
    font-size: 1.1rem;
  }
`;

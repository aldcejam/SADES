"use client"
import { styled } from "@mui/material/styles";

export const StyledSecondarydata = styled("div")`
  position: relative;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  .menu {
    width: 100%;
    .title-more-informations {
      font-size: 18px;
      margin: 0;
    }
    ul {
      display: flex;
      flex-direction: column; 
      background: ${(props) => props.theme.palette.background.paper}a6;
      border: 1px solid ${(props) => props.theme.palette.primary.dark}1a;
      border-radius: ${(props) => props.theme.shape.borderRadius}px;
      li {
        color: ${(props) => props.theme.palette.text.secondary};
        font-weight: bold;
        display: block;
      }
      &,
      li {
        list-style: none;
        margin: 0;
        padding: 10px;
      }
    }
    button {
      width: 100%;
      display: flex;
      gap: 5px;
      align-items: center;
      padding: 15px 10px 12px;
      margin-bottom: 10px;
      background: ${(props) => props.theme.palette.background.paper}a6;
      color: ${(props) => props.theme.palette.text.primary};
      border: 1px solid ${(props) => props.theme.palette.primary.dark}1a;
      border-radius: ${(props) => props.theme.shape.borderRadius}px;
      font-size: 18px;
      font-weight: 700;
      text-align: left;
      cursor: pointer;
      
    }
    .angle-bottom-icon{
      width: 80%;
    }

  }
`;

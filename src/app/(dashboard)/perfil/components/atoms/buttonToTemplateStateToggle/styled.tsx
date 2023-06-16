"use client"
import { styled } from "@mui/material/styles";

export const StyledButtonToTemplateStateToggle = styled("button")`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 5px;
  background-color: transparent;
  bottom: 0;
  top: 0;
  margin: auto;
  border: 0px solid;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  cursor: pointer;

  &[data-isOpen="true"] {
    top: 25px;
    flex-direction: row-reverse;
    left: 10px;
    top: 15px;
    bottom: inherit;
    .title {
      font-size: 1rem;
    } 
    .small-button {
      transform: scale(0.7);
      .angle-button-icon {
        transform: rotate(180deg) !important;
      }
    }
  }

  .title {
    color: ${(props) => props.theme.palette.text.primary};
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0;
  }
  .small-button {
    width: 22px;
    height: 22px;
    background: ${(props) => props.theme.palette.primary.main};
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    border: 1px solid ${(props) => props.theme.palette.primary.dark};

    .angle-button-icon {
      fill: white !important;
      transform: rotate(90deg);
      transition: 0.3s;
      margin-top: -2px;
      margin-left: -2px;
    }
  }
  `;

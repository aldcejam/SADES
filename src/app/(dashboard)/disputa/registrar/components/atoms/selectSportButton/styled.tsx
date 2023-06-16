"use client"
import { styled } from "@mui/material/styles";

export const StyledSelectSportButton = styled("button")`
    background-color: ${(props) => props.theme.palette.primary.light}3a;
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1rem;
    text-transform: capitalize;
    padding: 10px 20px;
    border: solid 2px ${(props) => props.theme.palette.primary.main}97;
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background-color: ${(props) => props.theme.palette.primary.dark}1a;
    }
    &[data-is-button-selected="true"]{
        border: solid 2px ${(props) => props.theme.palette.secondary.main};
        background: ${(props) => props.theme.palette.background.paper};
    }
`
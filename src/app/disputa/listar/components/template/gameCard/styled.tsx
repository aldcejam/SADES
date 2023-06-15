"use client"
import {styled} from "@mui/material/styles";

export const StyledGameCard = styled("article")`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.paper};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 5px 10px 23px ${(props) => props.theme.palette.secondary.main}4c,
    inset 5px 5px 23px ${(props) => props.theme.palette.primary.dark}19;
  border-top: 1px solid ${(props) => props.theme.palette.primary.main}bc;
  border-left: 1px solid ${(props) => props.theme.palette.primary.main}bc;
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary.main}bc;
  border-right: 1px solid ${(props) => props.theme.palette.secondary.main}bc;

  .curver-border-polygon{
    position: absolute;
    left: -15px;
    bottom: 0px;
    z-index: 0;
  }
  .game-score {
    padding: 10px 15px;

  }
`;
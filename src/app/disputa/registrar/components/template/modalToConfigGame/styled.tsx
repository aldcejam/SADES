"use client"
import { styled } from "@mui/material/styles";

export const StyledModalToConfigGame = styled("section")`
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.palette.primary.dark}b5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.palette.primary.dark};
  }
  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.text.primary};
    font-size: 1.8rem;
    transition: 0.2s;
    &:hover {
      color: ${(props) => props.theme.palette.text.secondary};
    }
  }

  position: absolute;
  width: clamp(200px, 96vw, 700px);
  max-height: 95vh;
  min-height: 95vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.background.paper}e2;
  backdrop-filter: blur(50px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 30px 30px;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  border-bottom: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-right: 2px solid ${(props) => props.theme.palette.secondary.main};
  border-left: 2px solid ${(props) => props.theme.palette.primary.main};
  border-top: 2px solid ${(props) => props.theme.palette.primary.main};
  h2 {
    font-size: clamp(1.4em, 3vw, 2.3rem);
    text-align: center;
    margin: 10px 0 20px;
    color: ${(props) => props.theme.palette.text.primary};
    font-weight: 600;
    text-transform: uppercase;
  }

  .container {
    display: grid;
    grid-template:
      "teams teams"
      "game-date situation"
      "game-date situation"
      "positions positions"
      "create-game-button create-game-button"
      / 1fr 1fr;
    margin-top: 20px;
    column-gap: 50px;
    row-gap: 20px;
    
    ${(props) => props.theme.breakpoints.down("sm")} {
      grid-template:
      "teams teams"
      "game-date situation"
      "game-date situation"
      "positions positions"
      "create-game-button create-game-button"
      / 1fr 1fr;
      column-gap: 25px;
    }
    ${(props) => props.theme.breakpoints.down("xs")} {
      grid-template:
      "teams teams"
      "game-date game-date"
      "situation situation"
      "positions positions"
      "create-game-button create-game-button"
      / 1fr 1fr;
      column-gap: 25px;
    }
    
    .teams {
      grid-area: teams;
      margin-bottom: 25px;
    }

    .situation {
      grid-area: situation;
    }
    .game-date {
      grid-area: game-date;
    }
    .create-game-button {
      grid-area: create-game-button;
    }
  }

  .pontuations {
    grid-area: positions;
  }
`;

"use client"
import { styled } from "@mui/material/styles";

export const StyledHomePageCards = styled('section')`
  width: 100%;
  display: grid;
  height: fit-content;
  grid-template:
    "gridTop gridTop" auto
    "gridLeft gridRight" auto
    / 6fr 8fr;
    grid-row: 0px;
   /* centralizar div */
  ${(props) => props.theme.breakpoints.down("xs")} {
    grid-template:
      "gridTop gridTop" auto
      "gridLeft gridRight" auto
      / 6fr 8fr;
  }
  align-content: center;
  gap: 20px;

  /* ===== cards grid ===== */
  .grid-top {
    grid-area: gridTop;
    display: grid;
    gap: 20px;
    grid-template:
      "item1 item1 item2" 150px
      "item1 item1 item3" 150px
      / 6fr 2fr 5fr;

    ${(props) => props.theme.breakpoints.down("sm")} {
      grid-template:
        "item1 item1 item1" 300px
        "item2 item3 item3" 150px
        / 7fr 1fr 5fr;
    }

    .card:nth-of-type(1) {
      grid-area: item1;
    }
    .card:nth-of-type(2) {
      grid-area: item2;
    }
    .card:nth-of-type(3) {
      grid-area: item3;
    }
  }

  .grid-left {
    grid-area: gridLeft;
    display: grid;
    gap: 20px;
    grid-template-rows: repeat(2, 185px);
    .card:nth-of-type(4) {
      grid-area: item4;
    }
    .card:nth-of-type(5) {
      grid-area: item5;
    }
  }

  .grid-right {
    display: grid;
    gap: 20px;
    grid-template-rows: 220px 150px;
    grid-area: gridRight;
  }
  /* ======== SVG SIZE ======== */
  .grid-right {
    .card:nth-of-type(2) {
      .svg {
        position: absolute;
        bottom: 0;
        width: 90%;
        max-width: 260px;
        left: 0;
        right: 0;
        margin: 3% auto 0;
      }
    }
  }
  `

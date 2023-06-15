"use client"
import {styled} from "@mui/material/styles";

export const StyleForTwoTeams = styled("div")`
  display: flex;
  align-items: baseline;
  gap: 5px;
  
  .team {
    display: flex;
    align-items: baseline;
    gap: 5px;
    &:nth-of-type(2) {
      flex-direction: row-reverse;
    }
    &__logo {
      position: relative;
      width: clamp(45px, 20vw, 53px);
      height: clamp(45px, 20vw, 53px);
      top: 6px;
    }
    &__score {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }

  .icon-versus {
    color: ${(props) => props.theme.palette.primary.dark};
    width: 20px;
    height: 20px;
    position: relative;
    bottom: -4px;
  }
`;

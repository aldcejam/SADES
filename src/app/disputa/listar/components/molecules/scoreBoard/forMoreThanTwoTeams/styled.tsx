"use client"
import { styled } from "@mui/material/styles";

export const StyleForMoreThanTwoTeams = styled("div")`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 12px;
  }

&::-webkit-scrollbar-track {
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.palette.primary.dark}b5;
  border-radius: 20px;
  border: 5px solid ${({ theme }) => theme.palette.background.paper};
}

  .team {
    display: flex;
    align-items: baseline;
    gap: 5px;
    padding-bottom: 6px;
    &__logo {
      position: relative;
      width: 46px;
      height: 46px;
      top: 6px;
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

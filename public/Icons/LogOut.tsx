"use client"
import { styled } from "@mui/material";
import { useThemeContext } from "../../src/contexts/ThemeContext";

const StyledLogOutIcon = styled("div")`
    width: 100%;
    height: 100%;
  svg{
    width: 100%;
    height: 100%;
  }
  .cls-1 {
    fill: url(#Gradiente_sem_nome_2);
  }
  .cls-2 {
    fill: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const LogOutIcon = () => {
  const { mainColor, secondaryColor } = useThemeContext();

  return (
    <StyledLogOutIcon>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="log-out">
          <path d="M9.48795 30H3.16265C1.41597 30 0 28.3211 0 26.25V3.75C0 1.67893 1.41597 0 3.16265 0H9.48795V3.75H3.16265V26.25H9.48795V30Z" fill="url(#paint0_linear_414_11279)" />
          <path d="M17.9125 25.0969L20.1583 22.4565L13.9608 15.0454L28.4187 15.0453C29.292 15.0453 30 14.2059 30 13.1703C30 12.1348 29.292 11.2953 28.4187 11.2953L13.9303 11.2954L20.2247 3.89513L17.9979 1.23225L7.89179 13.1139L17.9125 25.0969Z" fill="url(#paint1_linear_414_11279)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_414_11279" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stop-color={mainColor} />
            <stop offset="1" stop-color={secondaryColor} />
          </linearGradient>
          <linearGradient id="paint1_linear_414_11279" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stop-color={mainColor} />
            <stop offset="1" stop-color={secondaryColor} />
          </linearGradient>
        </defs>
      </svg>
    </StyledLogOutIcon>
  );
};

export default LogOutIcon;

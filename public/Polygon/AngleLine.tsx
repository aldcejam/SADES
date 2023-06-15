"use client"
import {styled} from "@mui/material/styles";

const AngleLine = () => {
  const StyledAngleLine = styled("div")`
    .cls-1 {
      fill: none;
      stroke-width: 4px;
      stroke: url(#Gradiente_sem_nome);
    }
  `;
  return (
    <StyledAngleLine className="svg-angleline">
      <svg viewBox="0 0 604 827.06">
        <defs>
          <linearGradient
            id="Gradiente_sem_nome"
            x1="758.91"
            y1="214.03"
            x2="-26.76"
            y2="787.33"
            gradientTransform="matrix(1, 0, 0, -1, 0, 826)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#5b6abd" />
            <stop offset="1" stop-color="#d943b8" />
          </linearGradient>
        </defs>
        <g id="Camada_2" data-name="Camada 2">
          <g id="Camada_1-2" data-name="Camada 1">
            <path
              className="cls-1"
              d="M602,827,583.77,179.61a50,50,0,0,0-23.26-40.85L356.45,9.74A49.94,49.94,0,0,0,329.73,2H0"
            />
          </g>
        </g>
      </svg>
    </StyledAngleLine>
  );
};
export default AngleLine;

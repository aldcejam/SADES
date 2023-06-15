"use client"
import { styled } from "@mui/material";

export const TopRight = () => {
    const Style = styled("div")`
    position: absolute;
    width: clamp(500px, 50vw, 600px);
    z-index: 1;
    top: -140px;
    right: -60px;
    .cls-1{fill:none;}
    .cls-2{clip-path:url(#clip-path);}
    .cls-3{
      fill: ${({ theme }) => theme.palette.background.paper};
      filter: ${(props) =>
            props.theme.palette.mode === "dark"
                ? "drop-shadow( 3px 3px 4px rgba(0, 0, 0, .7))"
                : "drop-shadow( 3px 3px 4px #808080ad)"};

    }
  `;
    return (
        <Style>
            <svg viewBox="0 0 418.06 225.81">
                <g id="Camada_2" data-name="Camada 2">
                    <g id="BACKGROUND">
                        <g className="cls-2">
                            <path
                                className="cls-3"
                                d="M120.91,85.17s-148.48,135.2-13.32,104.64,153.07-20.58,154.48,21.33c1.52,45.35,25.86,42.41,79.84,6.24s7.31,67.58,126.94,48L462.36,42.08Z"
                                transform="translate(-50.79 -42.08)"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </Style>
    );
};

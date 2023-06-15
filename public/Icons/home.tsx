"use client"
import { styled } from "@mui/material"
import { useThemeContext } from "../../src/contexts/ThemeContext"

const StyledHomeIcon = styled("div")`
    width: 100%;
    .cls-1{
        fill:url(#Gradiente_sem_nome);
        fill-rule: evenodd;
    };
`

export const HomeIcon = () => {
    const { mainColor, secondaryColor } = useThemeContext();
    return (
        <StyledHomeIcon>
            <svg className="HomeIcon" viewBox="0 0 30 30"><defs><linearGradient id="Gradiente_sem_nome" x1="-2.66" y1="28.7" x2="27.34" y2="-1.3" gradientTransform="matrix(1, 0, 0, -1, 0, 31.36)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color={mainColor} /><stop offset="1" stop-color={secondaryColor} /></linearGradient></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M30,10.63,18.37,1.19a5.84,5.84,0,0,0-7.07,0L0,10.36V30H11.67V21.88c0-1.49,1.49-2.7,3.33-2.7s3.33,1.21,3.33,2.7V30H30ZM13.65,3.1,3.33,11.48V27.29h5V21.88c0-3,3-5.41,6.67-5.41s6.67,2.42,6.67,5.41v5.41h5V11.75L16,3.1A2,2,0,0,0,13.65,3.1Z" /></g></g></svg>
        </StyledHomeIcon>

    )
}
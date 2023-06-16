"use client"
import {styled} from "@mui/material/styles";

export const StyledSituationGame = styled("div")`
    display: flex;
    flex-wrap: wrap;

    .buttons{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    .title{
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 15px;
        margin-bottom: 26px;
        color: ${props => props.theme.palette.text.primary};
    }
`
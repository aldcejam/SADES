"use client"
import {styled} from "@mui/material/styles";

const Vector = () => {
    const Style = styled('div')`
        .cls-1{
            fill: ${props => props.theme.palette.primary.main};
        }
    `
    return (
        <Style className="svg-vector">
      
        </Style>
    );
};

export default Vector;

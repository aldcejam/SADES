"use client"
import {styled} from "@mui/material/styles";

interface TypesStyledMenuBurguer {
    menuisactive: string
}

const StyledMenuBurguer = styled('div')<TypesStyledMenuBurguer>(({ menuisactive, ...props }) => `
    width: 30px;
    height: 30px;
    position: absolute;
    z-index: 10;
    left: 10px;
    margin: 20px auto;
    cursor: pointer;
    ${props.theme.breakpoints.down('sm')}{  
        position: fixed;
        margin-left: ${menuisactive == 'true' ? '10px' : `3vw`};
        transition: 0.3s;
        left: 0;
        top: 6px;
    }
    
    .line{
        background: ${props.theme.palette.primary.main};
        width: 30px;
        height: 3px;
        border-radius: 10px;
        transition: 0.5s;
        ${props.theme.breakpoints.down('sm')}{
            background: ${menuisactive == 'true' ? 'auto' : `${props.theme.palette.text.primary}`};
        }
    }
    .line:nth-of-type(1){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '8px' : '2px'};
        
    }
    .line:nth-of-type(2){
        transform: ${menuisactive == 'true' ? 'rotate(45deg)' : 'rotate(0)'};
        margin-top: ${menuisactive == 'true' ? '-3px' : '4px'};
    }
    .line:nth-of-type(3){
        margin-top: ${menuisactive == 'true' ? '-3px' : '4px'};
        transform: ${menuisactive == 'true' ? 'rotate(-45deg)' : 'rotate(0)'};
        
    }
`)
export default StyledMenuBurguer
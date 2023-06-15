"use client"
import { styled } from "@mui/material/styles";

export const StyledSettingsButtons = styled("div")`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 12px;
  z-index: 1;
  
  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: -50px;
        
  }
`;

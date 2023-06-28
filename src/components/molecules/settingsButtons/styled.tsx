"use client"
import { styled } from "@mui/material/styles";

export const StyledSettingsButtons = styled("div")`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  z-index: 1;
  
  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: 21px;
    margin-right: 15px;
        
  }
`;

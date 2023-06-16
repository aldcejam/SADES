"use client"
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const StyledModifyUserData = styled(motion.div)`
  max-height: 40px; 
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0px 0 0px 0;
  border: ${(props) => props.theme.palette.primary.main} 1px solid;
  border-radius: ${(props) => props.theme.shape.borderRadius}px !important;
  background-color: ${(props) => props.theme.palette.secondary.dark}1a;
  box-shadow: inset -40px -40px 81px
    ${(props) => props.theme.palette.primary.dark}12;
  backdrop-filter: blur(40px);
  transition: 0.3s;

  
  &[data-isOpen="true"]{
    position: relative;
    min-width: 100%; 
    max-height: 100%; 
  }



`;

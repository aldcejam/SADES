"use client"
import { styled } from "@mui/material/styles";

const ContainerPage = styled("div")`
  position: absolute;
  width: min(90vw, 1000px);
  left: 0;
  right: 0;
  margin: auto;
  padding-left: 70px;
  
  ${(props) => props.theme.breakpoints.down("sm")} {
    padding-left: 0px;
    top: 70px;
    width: min(94vw, 1000px);
  }
`;

export default ContainerPage;
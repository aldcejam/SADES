"use client"
import { styled } from "@mui/material/styles";

const ContentPage = styled("div")`
  position: relative;
  width: 100%;
  height: calc(90.2vh - 70px);
  min-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  
  &.with-boxshadow-in-bg{
    box-shadow: inset 20px 20px 81px
    ${(props) => props.theme.palette.primary.main}16,
    inset -20px -20px 81px ${(props) => props.theme.palette.secondary.main}16;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: calc(100vh - 130px);
    width: 100%;
  }


  .box-page {
    position: relative;
    z-index: 10;
    min-height: 100%;
    width: 100%; 
    border-radius: ${(props) => props.theme.shape.borderRadius}px;
    overflow: hidden;

    padding: 0 30px 30px;
    ${(props) => props.theme.breakpoints.down("xs")} {
      padding: 0 20px 15px;
    }

    .background {
      position: absolute;
      z-index: 0;
      min-height: 100%;
      width: calc(100% + 30px); 
      left: -30px;
      ${(props) => props.theme.breakpoints.down("xs")} {
        left: -20px;
        width: calc(100% + 20px);
      }
    }
  }
`;

export default ContentPage

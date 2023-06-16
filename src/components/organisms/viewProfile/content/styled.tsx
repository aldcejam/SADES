"use client"
import {styled} from "@mui/material/styles";

export const StyledContent = styled("div")`
    position: relative;
    z-index: 20;
    display: inline;
    justify-items: center;
    width: 70%;
    padding: 40px 0;

    .content__profile-pic {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      .profile-pic-size{
        width: 130px;
        height: 130px;
      }
    }
    .content--divider-line {
      width: 100%;
      height: 1px;
      margin: 10px 0 0;
      background-color: ${(props) => props.theme.palette.primary.dark};
    }
`
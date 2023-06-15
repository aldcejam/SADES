"use client"
import { styled } from "@mui/material/styles";

export const StyledNavegation = styled("nav")`
  ul.container {
    position: absolute;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    bottom: 0;
    gap: 10px;
    padding: 0;
    left: 10px;
    
     
    .icons-redirects-top{
      position: relative;
      top: -38vh;
    }
    .outLoginIcon{
      transition: 0.3s;
      transform: rotate(180deg);
    }
    .divider{
      position: relative;
      width: 100%;
      height: 2px;
      ::before{
        transition: 0.3s; 
        transition-delay: .1s;
        content: "";
        position: absolute; 
        margin: auto;
        height: 100%;
        background: ${(props) => props.theme.palette.primary.main};
        border-radius: 50%;
        top: 0;
      }
      &.sidebarfalse{
        ::before{
          width: 30px;
        }
      }
      &.sidebartrue{
        ::before{
          width: 135px;
        }
      }
    }
  }
`;

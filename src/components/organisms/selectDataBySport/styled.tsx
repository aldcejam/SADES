"use client"
import { styled } from "@mui/material/styles";

export const StyledSelectDataBySport = styled("div")`
  display: flex;
  justify-content: center;
  gap: 20px;
  ${(props) => props.theme.breakpoints.down("xs")} {
    gap: 10px;
  }

  ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sports {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.sport {  
}

`;

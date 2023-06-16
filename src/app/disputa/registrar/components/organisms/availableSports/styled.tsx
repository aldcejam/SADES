"use client"
import { styled } from "@mui/material/styles";

export const StyledAvailableSports = styled("div")`
  .title {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.palette.text.primary};
      text-align: center;
      font-weight: 600;
      margin: 0px 0 20px;
  }
  .box-sports {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

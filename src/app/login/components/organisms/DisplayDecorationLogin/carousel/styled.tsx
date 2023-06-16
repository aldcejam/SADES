"use client"
import { styled } from "@mui/material";

export const StyledCarousel = styled("div")`
  .splide {
    margin-top: -100px;
    .splide__list {
      background-color: transparent;
      margin-right: 0px !important;
      position: relative;

      .container-illustration{
        bottom: 30px;
      }
      .item-slide {
        display: flex;
        justify-content: center;
        background-color: transparent !important;
        h3{
          position: absolute;
          bottom: -20px;
          font-weight: 500;
          color: ${({ theme }) => theme.palette.text.primary};
        }
      }
    }
    .splide__pagination__page.is-active {
      background-color: ${({ theme }) => theme.palette.primary.main} !important;
    }
    .splide__pagination__page {
      background-color: ${({ theme }) => theme.palette.primary.dark}a1;
      border-radius: 100px;
      width: 15px;
      height: 7px;
      &:hover {
        background-color: ${({ theme }) =>
          theme.palette.primary.main} !important;
          filter: grayscale(70%);
    }
    }
  }
`;

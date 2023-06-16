"use client"
import { styled } from "@mui/material/styles";

export const StyledForm = styled("form")`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 15px;
  grid-template:
    "title title"
    "identity social-midias"
    "identity social-midias"
    "course course"
    "upload-image upload-image"
    "bio-message bio-message"
    "submit submit"
    / 1fr 1.5fr;
  padding: 0px 10% 30px;
  margin-top: 70px;
  height: fit-content;
  max-width: 600px;


  .title{
    grid-area: title;
    font-size: 1.3rem;
    margin: 0 0 10px 0;
    text-align: center;
  }
  .identity{
    grid-area: identity;
  }
  .social-midias{
    grid-area: social-midias;
  }
  .course{
    grid-area: course;
  }
  .upload-image {
    grid-area: upload-image;
  }
  .bio{
    grid-area: bio-message;
  }
  .submit-button {
    grid-area: submit;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    input[type="submit"] {
      grid-area: submit;
      padding: 10px 30px;
      font-weight: bold;
      transition: 0.3s;
      filter: blur(10);
      background-color: ${(props) => props.theme.palette.primary.main}5b;
      color: ${(props) => props.theme.palette.text.primary};
      border-radius: ${(props) => props.theme.shape.borderRadius}px;
      border: 2px solid ${(props) => props.theme.palette.secondary.main};

      &:hover {
        background-color: ${(props) => props.theme.palette.primary.main}c2;
        cursor: pointer;
      }
    }
  }


`;

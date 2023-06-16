import { styled } from "@mui/material/styles";

type TypesStyledInputUpload = {
  dragaccept: "true" | "false";
  dragreject: "true" | "false";
};

export const StyledInputUpload = styled("div")<TypesStyledInputUpload>(({ dragaccept, dragreject, ...props }) => `
  border: 2px solid ${
    dragaccept == "true"
      ? props.theme.palette.success.main
      : dragreject == "true"
      ? props.theme.palette.error.main
      : props.theme.palette.primary.main
  };
  border-radius: ${props.theme.shape.borderRadius}px;
  outline: none;
  transition: border 0.24s ease-in-out;
  width: 100%;
  padding: 3px 20px;
  display: flex;
  align-items: center;
  background: ${props.theme.palette.primary.main}36;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 2px solid ${props.theme.palette.primary.main};
    background: ${props.theme.palette.primary.main}75;
  }

  &.drag-active {
    border-color: ${props.theme.palette.success.main};
  }
  &.drag-reject {
    border-color: ${props.theme.palette.error.main};
  }
  .dropzone {
    width: 100%;
    height: 100%;
  }
  .label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 10px;
    justify-content: center;
    
    p{
      margin: 0px;
      text-align: center;
    color: ${
      dragaccept == "true"
        ? props.theme.palette.success.main
        : dragreject == "true"
        ? props.theme.palette.error.main
        : props.theme.palette.text.primary
    };

    }
      .icon{
      transform: rotate(-90deg);
      font-size: 3rem;
          color: ${
            dragaccept == "true"
              ? props.theme.palette.success.main
              : dragreject == "true"
              ? props.theme.palette.error.main
              : props.theme.palette.text.primary
          };

      }
    }
  
`
);

export const ThumbsContainer = styled("aside")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;

  .data-image-upload {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: ${(props) => props.theme.palette.text.primary};
    width: 100%;
    justify-content: center;

    &__thumb {
      position: relative;
      border-radius: 8px;
      border: 1px solid #eaeaea;
      display: flex;
      width: 70px;
      height: 70px;
      overflow: hidden;
    }
    &__informations {
      padding-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 40px;
      p {
        margin-top: 0;
        margin-bottom: 7px;
      }
      .informations__clear-data-image {
        border: 2px solid ${(props) => props.theme.palette.primary.dark}30;
        padding: 2px 4px;
        text-align: center;
        background-color: ${(props) => props.theme.palette.primary.dark}20;
        transition: 0.3s;
        &:hover {
          background-color: ${(props) => props.theme.palette.primary.dark}10;
          border: 2px solid ${(props) => props.theme.palette.primary.main};
        }
      }
    }
  }
`;

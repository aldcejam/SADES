"use client"
import { styled } from "@mui/material/styles";

export const StyledCardIllustration = styled("div")`
  .illustration-course {
    display: flex;
    align-content: center;
    justify-content: center;
    svg {
      width: 70%;
      max-width: 350px;
      min-width: 280px;
    }
  }
  /* ================================ */
  .illustration-jogos-esportivos {
    display: flex;
    align-content: center;
    justify-content: end;
  }
  /* ================================ */
  .illustration-jogos-do-seu-curso {
    display: flex;
    align-content: center;
    justify-content: end;
    svg {
      margin-right: 10%;
    }
  }
  /* ================================ */
  .illustration-edicoes-da-semadec {
    display: flex;
    align-items: flex-end;
    justify-content: right;
    svg {
      max-width: 250px;
    }
  }
  /* ================================ */
  .illustration-publicacoes-sobre-semadec {
    display: flex;
    align-items: flex-end;
    justify-content: right;
    svg {
      width: 75%;
      max-width: 180px;
    }
  }
  /* ================================ */
  .illustration-recordes-desta-edicao {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    svg {
      width: 70%;
      max-width: 170px;
    }
  }
`;

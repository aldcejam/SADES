import { SUAP_URL } from "../SuapURL";


// https://suap.ifrn.edu.br/api/docs/
const api = "/api/v2/minhas-informacoes/meus-dados/";
export const urlForGetUserData = SUAP_URL + api;

/* based in data returned by api of api/docs */
export type SuapUserDataProps = {
  cpf: string;
  data_nascimento: string;
  email: string;
  id: number;
  matricula: string;
  naturalidade: string;
  nome_usual: string;
  rg: string;
  tipo_sanguineo: string;
  tipo_vinculo: string;
  url_foto_75x100: string;
  url_foto_150x200: string;
  vinculo: {
    campus: string;
    cota_mec: string;
    cota_sistec: string;
    curriculo_lattes: string;
    curso: string;
    linha_pesquisa: any;
    matricula: string;
    matricula_regular: boolean;
    nome: string;
    situacao: string;
    situacao_sistemica: string;
  };
};

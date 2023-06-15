import axios from "axios";
import { TokenProps } from "../../TokenSuap/Token";
import { SuapApiSettings } from "../../ConfigApi/SuapApiSettings";
import { RemoveSlashIfLastLetter } from "../CheckVariables/RemoveSlashIfLastLetter";

type LogoutSuapProps = {
  token: TokenProps;
};

export const LogoutSuap = async ({ token }: LogoutSuapProps) => {
  let authHost = SuapApiSettings.AUTH_HOST;
  authHost = RemoveSlashIfLastLetter(authHost);
  const logoutURL = `${authHost}/o/revoke_token/`;
  try {
    await axios.post(
      logoutURL,
      {
        token: token.getValue(),
        client_id: SuapApiSettings.CLIENT_ID,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    token.revoke();
    window.location.href = SuapApiSettings.REDIRECT_URL;
    console.log("32223");
  } catch (error) {
    alert("Falha na comunicação com o SUAP");
    console.error(error);
  }
};

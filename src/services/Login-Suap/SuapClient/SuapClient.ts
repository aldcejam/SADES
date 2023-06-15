import { SuapApiSettings } from "../ConfigApi/SuapApiSettings";
import { TokenSuap } from "../TokenSuap/TokenSuap";
import { ExtractToken } from "./StratifiedURLSpecification/ExtractToken";
import { ExtractScope } from "./StratifiedURLSpecification/ExtractScope";
import { ExtractDuration } from "./StratifiedURLSpecification/ExtractDuration";
import { RemoveSlashIfLastLetter } from "./CheckVariables/RemoveSlashIfLastLetter";
import { SaveUserData } from "./ManageUserData/SaveUserData";
import { TokenProps } from "../TokenSuap/Token";
import { GetLoginURL } from "../ConfigApi/LoginURL";
import { LogoutSuap } from "./OptionsSuapClient/LogoutSuap";

export const SuapClient = () => {
  const token: TokenProps = TokenSuap({
    tokenValue: ExtractToken(),
    expirationTime: ExtractDuration(),
    scope: ExtractScope(),
  });

  let authHost = SuapApiSettings.AUTH_HOST;
  authHost = RemoveSlashIfLastLetter(authHost);

  const clientID = SuapApiSettings.CLIENT_ID;
  const redirectURL = SuapApiSettings.REDIRECT_URL;

  const Login = () => {
    window.location.href = GetLoginURL({ clientID, redirectURL });
  };
  const Logout = ()=>LogoutSuap({ token })

  const userData = SaveUserData({ token });

  const isAuthenticated = (): boolean => {
    return token.IsSuapTokenExist();
  };

  return {
    Login,
    Logout,
    token,
    userData,
    isAuthenticated,
  };
};

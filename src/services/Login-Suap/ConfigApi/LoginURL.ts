import { SuapApiSettings } from "./SuapApiSettings";

type GetLoginURLProps = {
    clientID: string;
    redirectURL: string;
}

export const GetLoginURL = ({ clientID, redirectURL }:GetLoginURLProps) => {

  const scope = SuapApiSettings.SCOPE;
  const authorizationURL = `${SuapApiSettings.AUTH_HOST}/o/authorize/`;

  const responseType = "token";
  const grantType = "implict";

  let loginUrl = authorizationURL +
  "?response_type=" +
  responseType +
  "&grant_type=" +
  grantType +
  "&client_id=" +
  clientID +
  "&scope=" +
  scope +
  "&redirect_uri=" +
  redirectURL

  return loginUrl;
};

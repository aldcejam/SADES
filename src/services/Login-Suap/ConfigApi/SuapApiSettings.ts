import { urlForGetUserData } from "./ApiDataScope"
import { SUAP_URL } from "./SuapURL"

export const SuapApiSettings = {
    CLIENT_ID:"t2Rwyj5bijo8xBPw1fwQuIMg65MSDZL3jBbyqtYs",
    REDIRECT_URL: "http://localhost:3000/",
    AUTH_HOST: SUAP_URL,
    SCOPE: "identificacao email documentos_pessoais",
    URL_FOR_GET_USERDATA: urlForGetUserData
}

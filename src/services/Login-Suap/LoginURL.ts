export const GetLoginURL = () => { 
    const authorizationURL = `${process.env.NEXT_PUBLIC_SUAP_URL}/o/authorize/`;
 
    const loginUrl = authorizationURL +
        "?response_type=token" +
        "&grant_type=implict" +
        "&client_id=" +
        process.env.NEXT_PUBLIC_SUAP_CLIENT_ID +
        "&scope=identificacao email documentos_pessoais" +
        "&redirect_uri=" +
        process.env.NEXT_PUBLIC_SUAP_REDIRECT_URL;
    return loginUrl;
};

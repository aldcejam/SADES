import { SuapTokenFunctions } from "services/Login-Suap/TokenSuap";
import { RemoveSlashIfLastLetter } from "../CheckVariables/RemoveSlashIfLastLetter";

type LogoutSuapProps = {
    token: SuapTokenFunctions
}

export const LogoutSuap = async ({ token }: LogoutSuapProps) => {
    let authHost = process.env.NEXT_PUBLIC_SUAP_URL as string;
    authHost = RemoveSlashIfLastLetter({authHost});
    const logoutURL = `${authHost}/o/revoke_token/`;

    if (!token.IsSuapTokenExist()) return;
    fetch(logoutURL, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
            token: token.GetValue(),
            client_id: process.env.NEXT_PUBLIC_SUAP_CLIENT_ID,
        }),
    })
        .then(() => {
            token.Revoke();
            window.location.href = process.env.NEXT_PUBLIC_SUAP_REDIRECT_URL as string;
        })
        .catch((error) => {
            alert("Faddlha na comunicação com o SUAP");
            console.error(error);
        });
};

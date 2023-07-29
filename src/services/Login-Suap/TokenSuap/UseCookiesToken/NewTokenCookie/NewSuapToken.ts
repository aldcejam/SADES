import Cookies from "js-cookie";

type NewSuapTokenIfCookieIsExpiredProps = {
    finishTime: Date | undefined;
    tokenValue: string | undefined;
}

export const NewSuapTokenIfCookieIsExpired = (
    { 
        finishTime,
        tokenValue
    }: NewSuapTokenIfCookieIsExpiredProps
) => {
    if (!Cookies.get("suapToken") && tokenValue && finishTime) {
        Cookies.set("suapToken", tokenValue, { expires: finishTime });
    }
};
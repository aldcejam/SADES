import Cookies from "js-cookie";

type NewSuapTokenIfCookieIsExpiredProps = {
  tokenValue: any;
  finishTime: any;
};

export const NewSuapTokenIfCookieIsExpired = ({
  finishTime,
  tokenValue,
}: NewSuapTokenIfCookieIsExpiredProps) => {
  if (!Cookies.get("suapToken") && tokenValue && finishTime) {
    Cookies.set("suapToken", tokenValue, { expires: finishTime });
  }
};
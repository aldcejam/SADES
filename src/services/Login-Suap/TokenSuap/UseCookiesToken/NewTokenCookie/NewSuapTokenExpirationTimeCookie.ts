import Cookies from "js-cookie";

type NewSuapTokenExpirationTimeIfCookieIsExpiredProps = {
    finishTime: any;
  };
  
  export const NewSuapTokenExpirationTimeIfCookieIsExpired = ({
    finishTime,
  }: NewSuapTokenExpirationTimeIfCookieIsExpiredProps) => {
    if (!Cookies.get("suapTokenExpirationTime") && finishTime) {
      Cookies.set("suapTokenExpirationTime", finishTime + "", {
        expires: finishTime,
      });
    }
  };
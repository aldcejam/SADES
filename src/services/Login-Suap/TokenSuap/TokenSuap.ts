import Cookies from "js-cookie";

import {
  GetSuapTokenExpirationTimeIfCookieNotExpired,
  GetSuapTokenIfCookieNotExpired,
  NewSuapTokenExpirationTimeIfCookieIsExpired,
  NewSuapTokenIfCookieIsExpired,
  RevokeCookiesSuap,
} from "./UseCookiesToken/index";

type TokenSuapProps = {
  tokenValue?: string | null;
  expirationTime: number;
  scope?: string | null;
};

export const TokenSuap = ({ tokenValue, expirationTime, scope }: TokenSuapProps) => {
  let startTime = new Date().getTime();
  let finishTime: Date | null = new Date(startTime + expirationTime);
 
  NewSuapTokenIfCookieIsExpired({
    tokenValue: tokenValue,
    finishTime: finishTime,
  });
  tokenValue = GetSuapTokenIfCookieNotExpired();

  NewSuapTokenExpirationTimeIfCookieIsExpired({
    finishTime: finishTime,
  });
  finishTime = GetSuapTokenExpirationTimeIfCookieNotExpired();

  const getValue = () => {
    return tokenValue;
  };

  const getExpirationTime = () => {
    return finishTime;
  };

  const getScope = function () {
    return scope;
  };

  const IsSuapTokenExist = () => {
    if (Cookies.get("suapToken") && tokenValue != null) {
      return true;
    }
    return false;
  };

  const revoke = () => {
    tokenValue = null;
    startTime = new Date().getTime();
    finishTime = null;

    RevokeCookiesSuap();
  };
  return { getValue, getExpirationTime, getScope, IsSuapTokenExist, revoke };
};

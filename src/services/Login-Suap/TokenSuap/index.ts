import Cookies from "js-cookie";

import {
  GetSuapTokenExpirationTimeIfCookieNotExpired,
  GetSuapTokenIfCookieNotExpired,
  NewSuapTokenExpirationTimeIfCookieIsExpired,
  NewSuapTokenIfCookieIsExpired,
  RevokeCookiesSuap,
} from "./UseCookiesToken";

interface ITokenSuap {
  tokenValue: string | undefined;
  expirationTime: number;
  scope: string | undefined;
}

export interface SuapTokenFunctions {
  GetValue: () => string | undefined;
  GetExpirationTime: () => Date | undefined;
  GetScope: () => string | undefined;
  IsSuapTokenExist: () => boolean;
  Revoke: () => void;
}

export const TokenSuap = ({ tokenValue, expirationTime, scope }: ITokenSuap): SuapTokenFunctions => {
  let startTime = new Date().getTime();
  let finishTime: Date | undefined = new Date(startTime + expirationTime);

  NewSuapTokenIfCookieIsExpired({
    finishTime,
    tokenValue,
  });
  tokenValue = GetSuapTokenIfCookieNotExpired();

  NewSuapTokenExpirationTimeIfCookieIsExpired({ finishTime });

  finishTime = GetSuapTokenExpirationTimeIfCookieNotExpired();

  const GetValue = (): string | undefined => {
    return tokenValue;
  };

  const GetExpirationTime = (): Date | undefined => {
    return finishTime;
  };

  const GetScope = (): string | undefined => {
    return scope;
  };

  const IsSuapTokenExist = (): boolean => {
    return !!(Cookies.get("suapToken") && tokenValue);
  };

  const Revoke = (): void => {
    tokenValue = undefined;
    startTime = new Date().getTime();
    finishTime = undefined;

    RevokeCookiesSuap();
  };

  return { GetValue, GetExpirationTime, GetScope, IsSuapTokenExist, Revoke };
};

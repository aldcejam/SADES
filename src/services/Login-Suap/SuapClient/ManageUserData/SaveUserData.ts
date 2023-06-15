import { useEffect, useState } from "react";
import { TokenProps } from "../../TokenSuap/Token";
import { CheckUserAndUserData } from "../CheckVariables/CheckUserAndUserData";
import { FetchUserData } from "./FetchUserData";

type SaveUserDataProps = {
  token: TokenProps;
};
export const SaveUserData = ({ token }: SaveUserDataProps) => {
  const [userData, setUserData] = useState();
  

  const SaveUserData = (response: any) => {
    const data = JSON.parse(JSON.stringify(response.data));
    setUserData(data);
  };

  const GetData = FetchUserData({ tokenValue: token.getValue() });

  useEffect(() => {
    if (token.IsSuapTokenExist() && !userData) {
      GetData({ SaveUserData });
    }
  }, []);

  const userLogged = token.IsSuapTokenExist();
  const userDataChecked = CheckUserAndUserData({ userData, userLogged });

  return userDataChecked;
};

import axios from "axios";
import { SuapApiSettings } from "../../ConfigApi/SuapApiSettings";

export type TokenProps = {
  tokenValue: string | null | undefined;
};
export const FetchUserData = ({ tokenValue }: TokenProps) => {
  type GetDataProps = { SaveUserData: (response: any)=>void };
  
  const getData = async ({ SaveUserData }: GetDataProps) => {
    const urlForGetUserData = SuapApiSettings.URL_FOR_GET_USERDATA;
    const scope = SuapApiSettings.SCOPE;

    await axios
      .get(urlForGetUserData, {
        data: { scope: scope },
        headers: {
          Authorization: "Bearer " + tokenValue,
          Accept: "application/json",
        },
      })
      .then((response) => {
        SaveUserData(response);
      })
      .catch((response) => {
        /* alert("Falha na comunicação com o SUAP"); */
        console.log(response);
      });
  };

  return getData;
};

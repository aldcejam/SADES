import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadSituation = () => {
  return useAppSelector(DataForGameRegistrationStates).situation;
};

export { ReadSituation };

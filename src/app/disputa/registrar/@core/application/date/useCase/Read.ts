import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadDate = () => {
  return useAppSelector(DataForGameRegistrationStates).date;
};

export { ReadDate };

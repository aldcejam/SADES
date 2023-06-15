import { DataForGameRegistrationStates } from "src/@core-pages/disputa/registrar/entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadPositionsCount = () => {
  return useAppSelector(DataForGameRegistrationStates).pontuationbyPositions?.length;
};

export { ReadPositionsCount };

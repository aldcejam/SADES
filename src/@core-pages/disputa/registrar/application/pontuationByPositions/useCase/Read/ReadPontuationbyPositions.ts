import { DataForGameRegistrationStates } from "src/@core-pages/disputa/registrar/entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadPontuationbyPositions = () => {
  return useAppSelector(DataForGameRegistrationStates).pontuationbyPositions;
};

export { ReadPontuationbyPositions };

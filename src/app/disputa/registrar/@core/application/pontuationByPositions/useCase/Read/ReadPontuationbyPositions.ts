import { DataForGameRegistrationStates } from "../../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadPontuationbyPositions = () => {
  return useAppSelector(DataForGameRegistrationStates).pontuationbyPositions;
};

export { ReadPontuationbyPositions };

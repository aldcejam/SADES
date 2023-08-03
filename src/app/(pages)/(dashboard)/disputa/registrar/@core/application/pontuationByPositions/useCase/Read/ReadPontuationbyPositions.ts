import { DataForRegistrarDisputaStates } from "../../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadPontuationbyPositions = () => {
  return useAppSelector(DataForRegistrarDisputaStates).pontuationbyPositions;
};

export { ReadPontuationbyPositions };

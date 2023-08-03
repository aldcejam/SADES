import { DataForRegistrarDisputaStates } from "../../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadPositionsCount = () => {
  return useAppSelector(DataForRegistrarDisputaStates).pontuationbyPositions?.length;
};

export { ReadPositionsCount };

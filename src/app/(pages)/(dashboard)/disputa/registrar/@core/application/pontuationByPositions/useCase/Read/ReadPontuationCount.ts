import { DataForRegistrarDisputaStates } from "../../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";

const ReadPositionsCount = () => {
  return useAppSelector(DataForRegistrarDisputaStates).pontuationbyPositions?.length;
};

export { ReadPositionsCount };

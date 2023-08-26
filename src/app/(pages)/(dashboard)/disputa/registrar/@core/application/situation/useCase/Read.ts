import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";

const ReadSituation = () => {
  return useAppSelector(DataForRegistrarDisputaStates).situation;
};

export { ReadSituation };

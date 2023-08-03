import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadSituation = () => {
  return useAppSelector(DataForRegistrarDisputaStates).situation;
};

export { ReadSituation };

import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadDate = () => {
  return useAppSelector(DataForRegistrarDisputaStates).date;
};

export { ReadDate };

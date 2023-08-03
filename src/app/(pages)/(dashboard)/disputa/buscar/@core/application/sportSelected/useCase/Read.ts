import { DataForBuscarDisputaStates } from "../../../entities/DataForBuscarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadSportSelected = () => {
    return useAppSelector(DataForBuscarDisputaStates).sportSelected;
}

export { ReadSportSelected };
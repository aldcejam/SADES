import { DataForFindGameStates } from "../../../entities/DataForFindGame";
import { useAppSelector } from "@redux-config/hook";

const ReadSportSelected = () => {
    return useAppSelector(DataForFindGameStates).sportSelected;
}

export { ReadSportSelected };
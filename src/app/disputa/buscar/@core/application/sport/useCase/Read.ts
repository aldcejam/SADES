import { DataForFindGameStates } from "../../../entities/DataForFindGame";
import { useAppSelector } from "@redux-config/hook";

const ReadSport = () => {
    return useAppSelector(DataForFindGameStates).sport;
}

export { ReadSport };
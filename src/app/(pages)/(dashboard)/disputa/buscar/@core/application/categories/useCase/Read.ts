import { DataForBuscarDisputaStates } from "../../../entities/DataForBuscarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadCategoriesSelected = () => {
    return useAppSelector(DataForBuscarDisputaStates).categories;
}

export { ReadCategoriesSelected };
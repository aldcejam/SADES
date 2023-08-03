import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadCategoriesSelected = () => {
    return useAppSelector(DataForRegistrarDisputaStates).categories;
}

export { ReadCategoriesSelected };
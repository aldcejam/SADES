import { DataForFindGameStates } from "../../../entities/DataForFindGame";
import { useAppSelector } from "@redux-config/hook";

const ReadCategoriesSelected = () => {
    return useAppSelector(DataForFindGameStates).categories;
}

export { ReadCategoriesSelected };
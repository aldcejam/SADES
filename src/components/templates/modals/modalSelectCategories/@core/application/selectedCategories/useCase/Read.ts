import { DataToSelectCategoriesStates } from "../../../entities/DataToSelectCategories";
import { useAppSelector } from "@redux-config/hook";

const ReadCategoriesSelected = () => {
    return useAppSelector(DataToSelectCategoriesStates).selectedCategories;
}

export { ReadCategoriesSelected };
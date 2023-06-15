import { DataToSelectCategoriesStates } from "../../../entities/DataToSelectCategories";
import { useAppSelector } from "@redux-config/hook";

const ReadSelectedSportData = () => {
    return useAppSelector(DataToSelectCategoriesStates).selectedSportData;
}

export { ReadSelectedSportData };
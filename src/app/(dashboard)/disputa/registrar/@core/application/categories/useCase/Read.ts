import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadCategoriesSelected = () => {
    return useAppSelector(DataForGameRegistrationStates).categories;
}

export { ReadCategoriesSelected };
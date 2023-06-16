import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadGenderCategory = () => {
    return useAppSelector(DataForGameRegistrationStates).genderCategory;
}

export { ReadGenderCategory };
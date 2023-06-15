import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadSportCategory = () =>{
    return useAppSelector(DataForGameRegistrationStates).sportCategory;
} 

export { ReadSportCategory }
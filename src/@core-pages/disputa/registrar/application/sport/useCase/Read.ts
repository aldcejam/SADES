import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadSportSelected = () =>{
    return useAppSelector(DataForGameRegistrationStates).sportSelected;
} 

export { ReadSportSelected }
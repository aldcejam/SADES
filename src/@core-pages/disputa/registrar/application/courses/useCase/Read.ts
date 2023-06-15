import { DataForGameRegistrationStates } from "../../../entities/DataForGameRegistration";
import { useAppSelector } from "@redux-config/hook";

const ReadCoursesSelected = () =>{
    return useAppSelector(DataForGameRegistrationStates).coursesSelected;
}
 
export { ReadCoursesSelected };
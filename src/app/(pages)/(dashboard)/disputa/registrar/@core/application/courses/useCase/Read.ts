import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadCoursesSelected = () =>{
    return useAppSelector(DataForRegistrarDisputaStates).coursesSelected;
}
 
export { ReadCoursesSelected };
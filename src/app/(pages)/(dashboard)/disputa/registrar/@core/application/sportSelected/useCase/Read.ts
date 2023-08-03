import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "@redux-config/hook";

const ReadSportSelected = () =>{
    return useAppSelector(DataForRegistrarDisputaStates).sportSelected;
} 

export { ReadSportSelected }
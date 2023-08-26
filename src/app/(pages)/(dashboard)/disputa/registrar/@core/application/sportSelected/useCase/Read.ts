import { DataForRegistrarDisputaStates } from "../../../entities/DataForRegistrarDisputa";
import { useAppSelector } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";

const ReadSportSelected = () =>{
    return useAppSelector(DataForRegistrarDisputaStates).sportSelected;
} 

export { ReadSportSelected }
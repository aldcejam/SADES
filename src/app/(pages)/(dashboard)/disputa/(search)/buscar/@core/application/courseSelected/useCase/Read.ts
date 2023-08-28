import { DataForBuscarDisputaStates } from "../../../entities/DataForBuscarDisputa";
import { useAppSelector } from "app/(pages)/(dashboard)/disputa/(search)/buscar/@core/entities/config/hook";

const ReadCourseSelected = () => {
    return useAppSelector(DataForBuscarDisputaStates).courseSelected;
}

export { ReadCourseSelected };
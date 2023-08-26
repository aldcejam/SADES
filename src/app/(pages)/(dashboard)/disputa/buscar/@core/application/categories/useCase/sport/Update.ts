import { useAppDispatch, useAppSelector } from "app/(pages)/(dashboard)/disputa/buscar/@core/entities/config/hook";
import {
  DataForBuscarDisputaStates,
  SetCategories,
} from "../../../../entities/DataForBuscarDisputa"; 

const UpdateSportCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForBuscarDisputaStates
  ).categories; 

  return (sportCategory: string) => {
 
    dispatch(
      SetCategories({
        ...categories,
        sportCategory: sportCategory,
      })
    );
  };
};

export { UpdateSportCategory };

import { GenderOptionsProps } from "defaultTypes/GendersProps";
import { useAppDispatch, useAppSelector } from "@redux-config/hook"
import {
  DataForBuscarDisputaStates,
  SetCategories,
} from "../../../../entities/DataForBuscarDisputa"; 

const UpdateGenderCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForBuscarDisputaStates
  ).categories;
  
  return (genderCategory: GenderOptionsProps) => { 
    
    dispatch(
      SetCategories({
        ...categories,
        genderCategory: genderCategory,
      })
    );
  };
};

export { UpdateGenderCategory };

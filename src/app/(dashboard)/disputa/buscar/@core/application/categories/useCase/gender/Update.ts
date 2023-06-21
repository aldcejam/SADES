import { GenderOptionsProps } from "defaultTypes/GendersProps";
import { useAppDispatch, useAppSelector } from "@redux-config/hook"
import {
  DataForFindGameStates,
  SetCategories,
} from "../../../../entities/DataForFindGame"; 

const UpdateGenderCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForFindGameStates
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

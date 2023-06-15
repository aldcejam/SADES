import { useAppDispatch, useAppSelector } from "@redux-config/hook";
import {
  DataForFindGameStates,
  SetCategories,
} from "../../../../entities/DataForFindGame"; 

const UpdateSportCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForFindGameStates
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

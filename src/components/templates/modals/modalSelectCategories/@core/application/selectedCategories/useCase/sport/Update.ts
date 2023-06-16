import { useAppDispatch, useAppSelector } from "@redux-config/hook";
import {
  DataToSelectCategoriesStates,
  SetSelectedCategories,
} from "../../../../entities/DataToSelectCategories"; 

const UpdateSelectedSportCategory = () => {
  const dispatch = useAppDispatch();
  const selectedCategories = useAppSelector(
    DataToSelectCategoriesStates
  ).selectedCategories;
 

  return (sportSelected: string) => {

    dispatch(
      SetSelectedCategories({
        ...selectedCategories,
        sportCategory: sportSelected,
      })
    );
  };
};

export { UpdateSelectedSportCategory };

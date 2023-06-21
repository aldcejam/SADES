import { GenderOptionsProps } from "defaultTypes/GendersProps";
import { useAppDispatch, useAppSelector } from "@redux-config/hook";
import {
  DataToSelectCategoriesStates,
  SetSelectedCategories,
} from "../../../../entities/DataToSelectCategories";

const UpdateSelectedGenderCategory = () => {
  const dispatch = useAppDispatch();
  const selectedCategories = useAppSelector(
    DataToSelectCategoriesStates
  ).selectedCategories;

  return (genderSelected: GenderOptionsProps) => {
    dispatch(
      SetSelectedCategories({
        ...selectedCategories,
        genderCategory: genderSelected,
      })
    );
  };
};

export { UpdateSelectedGenderCategory };

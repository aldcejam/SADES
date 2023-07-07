import { GenderOptionsProps } from "defaultTypes/GendersProps";
import { useAppDispatch, useAppSelector } from "@redux-config/hook"
import {
  DataForGameRegistrationStates,
  SetCategories,
} from "../../../../entities/DataForGameRegistration";

const UpdateGenderCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForGameRegistrationStates
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

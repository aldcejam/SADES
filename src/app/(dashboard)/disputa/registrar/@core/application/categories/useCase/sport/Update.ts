import { useAppDispatch, useAppSelector } from "@redux-config/hook";
import {
  DataForGameRegistrationStates,
  SetCategories,
} from "../../../../entities/DataForGameRegistration";

const UpdateSportCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForGameRegistrationStates
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

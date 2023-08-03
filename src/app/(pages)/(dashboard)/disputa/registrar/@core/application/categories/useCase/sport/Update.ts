import { useAppDispatch, useAppSelector } from "@redux-config/hook";
import {
  DataForRegistrarDisputaStates,
  SetCategories,
} from "../../../../entities/DataForRegistrarDisputa";

const UpdateSportCategory = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    DataForRegistrarDisputaStates
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

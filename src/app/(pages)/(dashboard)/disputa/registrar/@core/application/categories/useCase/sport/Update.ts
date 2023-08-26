import { useAppDispatch, useAppSelector } from "app/(pages)/(dashboard)/disputa/registrar/@core/entities/config/hook";
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

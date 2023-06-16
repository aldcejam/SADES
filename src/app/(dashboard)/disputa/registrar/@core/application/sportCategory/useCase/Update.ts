import { SetSportCategory } from "../../../entities/DataForGameRegistration";
import { SportCategoryProps } from "../../../entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";


const UpdateSportCategory = () => {

  const dispatch = useAppDispatch();

  return (SportCategory: SportCategoryProps) => {
    dispatch(SetSportCategory(SportCategory));
  }
}


export { UpdateSportCategory };

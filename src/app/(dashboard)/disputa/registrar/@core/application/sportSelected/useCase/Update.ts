import { SetSportSelected } from "../../../entities/DataForGameRegistration";
import { SportSelectedProps } from "../../../entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";
import { ManageCategories } from "../../categories/ManageCategories"

const UpdateSportSelected = () => {
  const { ResetCatories } = ManageCategories();

  const dispatch = useAppDispatch();


  return (sportSelected: SportSelectedProps) => {
    ResetCatories();
    dispatch(SetSportSelected(sportSelected));
  };
};

export { UpdateSportSelected };

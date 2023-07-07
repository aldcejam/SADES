import { SportSelectedProps } from "../../../entities/IDataForFindGame";
import { useAppDispatch } from "@redux-config/hook";
import { SetSportSelected } from "../../../entities/DataForFindGame";
import { ManageCategories } from "../../categories/ManageCategories";

const UpdateSportSelected = () => {
  const { ResetCatories } = ManageCategories();
  const dispatch = useAppDispatch();

  return (sportSelected: SportSelectedProps) => {
    ResetCatories()
    dispatch(SetSportSelected({} as SportSelectedProps)); /// Reset sport
    dispatch(SetSportSelected(sportSelected));
  };
};

export { UpdateSportSelected };

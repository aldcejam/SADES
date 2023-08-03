import { SetSportSelected } from "../../../entities/DataForRegistrarDisputa";
import { SportSelectedProps } from "../../../entities/IDataForRegistrarDisputa";
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

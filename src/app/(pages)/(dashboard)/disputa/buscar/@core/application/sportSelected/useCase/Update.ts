import { SportSelectedProps } from "../../../entities/IDataForBuscarDisputa";
import { useAppDispatch } from "app/(pages)/(dashboard)/disputa/buscar/@core/entities/config/hook";
import { SetSportSelected } from "../../../entities/DataForBuscarDisputa";
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

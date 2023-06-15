import { SportProps } from "../../../entities/IDataForFindGame";
import { useAppDispatch } from "@redux-config/hook";
import { SetSport } from "../../../entities/DataForFindGame";
import { ManageCategories } from "../../categories/ManageCategories";

const UpdateSport = () => {
  const { ResetCatories } = ManageCategories();
  const dispatch = useAppDispatch();

  return (sporst: SportProps) => {
    ResetCatories()
    dispatch(SetSport({} as SportProps)); /// Reset sport
    dispatch(SetSport(sporst));
  };
};

export { UpdateSport };

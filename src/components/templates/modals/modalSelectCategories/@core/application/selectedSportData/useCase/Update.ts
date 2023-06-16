import { SelectedSportDataProps } from "../../../entities/IDataToSelectCategories";
import { useAppDispatch } from "@redux-config/hook";
import { SetSelectedSportData } from "../../../entities/DataToSelectCategories";
import { ManageSelectedCategories } from "../../selectedCategories/ManageSelectedCategories";

const UpdateSelectedSportData = () => {
  const dispatch = useAppDispatch();
  const { ResetSelectedCatories } = ManageSelectedCategories()

  return (selectedSportData: SelectedSportDataProps) => {
    ResetSelectedCatories()
    dispatch(SetSelectedSportData(selectedSportData));
  }
}

export { UpdateSelectedSportData };
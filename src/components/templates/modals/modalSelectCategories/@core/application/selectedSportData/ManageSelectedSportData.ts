import { SelectedSportDataProps } from "../../entities/IDataToSelectCategories";
import { ReadSelectedSportData, UpdateSelectedSportData} from "./useCase"

interface ManageSelectedSportDataReturnProps {
  selectedSportData: SelectedSportDataProps,
  UpdateSelectedSportData: (selectedSportData: SelectedSportDataProps) => void
}

const ManageSelectedSportData = ():ManageSelectedSportDataReturnProps => { 
  return {
    selectedSportData: ReadSelectedSportData(),
    UpdateSelectedSportData: UpdateSelectedSportData(),
  };
};

export { ManageSelectedSportData };
 
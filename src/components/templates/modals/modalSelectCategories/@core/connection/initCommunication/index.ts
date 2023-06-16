import { ManageSelectedSportData } from "../../application/selectedSportData/ManageSelectedSportData";
import { ConnectStates, ConnectStatesProps } from "../../utils/connectStates";

type InitCommunicationModalSelectCategoriesProps = ConnectStatesProps;

const InitCommunicationModalSelectCategories = ({
  UpdateGenderCategory,
  UpdateSportCategory,
}: InitCommunicationModalSelectCategoriesProps) => {
  const { UpdateSelectedSportData } = ManageSelectedSportData();

  const { useConnect } = ConnectStates({
    UpdateGenderCategory,
    UpdateSportCategory,
  });
  useConnect();

  return {
    UpdateSelectedSportData: UpdateSelectedSportData,
  };
};

export { InitCommunicationModalSelectCategories };

import { ManageSelectedCategories } from "../../application/selectedCategories/ManageSelectedCategories";
import { ManageSelectedSportData } from "../../application/selectedSportData/ManageSelectedSportData";
import { Submit } from "../../utils/submit";

const ModalSelectCategoriesStatesConsumer = (
  SubmitRedirect?: () => void
) => {
  const { selectedSportData } = ManageSelectedSportData();
  const { selectedCategories } = ManageSelectedCategories();

  const SubmitError = () => {
    console.error("Submit redirect não definido");
  };

  return {
    selectedSportData,
    selectedCategoriesStates: selectedCategories,
    Submit: SubmitRedirect ? Submit(SubmitRedirect) : SubmitError,
  };
};

export { ModalSelectCategoriesStatesConsumer };

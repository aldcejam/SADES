import {
  SelectedCategoriesProps,
  SelectedSportDataProps,
} from "../../entities/IDataToSelectCategories";

type VerificationsProps = {
  selectedSportData: SelectedSportDataProps;
  selectedCategories: SelectedCategoriesProps;
};

const Verifications = ({
  selectedSportData,
  selectedCategories,
}: VerificationsProps) => {
  if (selectedSportData.sportCategories && !selectedCategories.sportCategory) {
    throw new Error("Categoria esportiva não selecionada");
  }
  if (selectedSportData.genderCategories && !selectedCategories.genderCategory) {
    throw new Error("Categoria de gênero não selecionada");
  }
  return true;
};

export { Verifications };

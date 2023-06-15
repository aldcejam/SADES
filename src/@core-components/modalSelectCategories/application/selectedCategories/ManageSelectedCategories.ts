import { ReadCategoriesSelected, UpdateSelectedGenderCategory, UpdateSelectedSportCategory,ResetSelectedCatories } from "./useCase";

const ManageSelectedCategories= () => {
  return {
    selectedCategories: ReadCategoriesSelected(),
    UpdateGenderSelected: UpdateSelectedGenderCategory(),
    UpdateSportSelected: UpdateSelectedSportCategory(),
    ResetSelectedCatories: ResetSelectedCatories()
  };
};

export { ManageSelectedCategories };
 
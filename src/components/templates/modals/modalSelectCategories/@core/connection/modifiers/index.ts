import { ManageSelectedCategories } from "../../application/selectedCategories/ManageSelectedCategories";

const ModalSelectCategoriesStatesModifiers = () => {
  const { UpdateGenderSelected, UpdateSportSelected } =
    ManageSelectedCategories();

  return {
    selectedCategoriesModifiers: {
      UpdateGenderSelected,
      UpdateSportSelected,
    },
  };
};

export { ModalSelectCategoriesStatesModifiers };

import { QuerySports } from "../../api/query/QuerySports";
import { ManageCategories } from "../../application/categories/ManageCategories";
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected";
import { Submit } from "../../utils/submit";

const InitCommunicationBuscarDisputa = () => {
  const { UpdateGenderCategory, UpdateSportCategory, categories } = ManageCategories();
  const { sportSelected, UpdateSportSelected } = ManageSportSelected()

  return {
    sportSelected: {
      value: sportSelected,
      Update: UpdateSportSelected
    },
    listSport: QuerySports,
    sportCategorySelected: {
      value: categories.sportCategory,
      Update: UpdateSportCategory
    },
    genderCategorySelected: {
      value: categories.genderCategory,
      Update: UpdateGenderCategory
    },
    Submit: Submit,
  };
};

export { InitCommunicationBuscarDisputa };

import { QuerySports } from "../api/query/QuerySports";
import { ManageCategories } from "../application/categories/ManageCategories";
import { ManageSportSelected } from "../application/sportSelected/ManageSportSelected";
import { Submit } from "../utils/submit";

const PageDisputaBuscarConnection = () => {
  const { UpdateGenderCategory, UpdateSportCategory, categories } = ManageCategories();
  const { sportSelected, UpdateSportSelected } = ManageSportSelected()

  return {
    sportSelected: {
      value: sportSelected,
      Update: UpdateSportSelected
    },
    listSport: QuerySports,
    genderAndSportCategorySelected: {
      genderCategorySelected: {
        value: categories.genderCategory,
        Update: UpdateGenderCategory
      },
      sportCategorySelected: {
        value: categories.sportCategory,
        Update: UpdateSportCategory
      },
    }, 
    Submit: Submit,
  };
};

export { PageDisputaBuscarConnection };

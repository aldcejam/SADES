import { QuerySports } from "../api/query/QuerySports";
import { ManageCategories } from "../application/categories/ManageCategories";
import { ManageCourseSelected } from "../application/courseSelected/ManageCourseSelected";
import { ManageSportSelected } from "../application/sportSelected/ManageSportSelected";
import { Submit } from "../utils/submit";

const PageDisputaBuscarConnection = () => {
  const { courseSelected, UpdateCourseSelected } = ManageCourseSelected()
  const { UpdateGenderCategory, UpdateSportCategory, categories } = ManageCategories();
  const { sportSelected, UpdateSportSelected } = ManageSportSelected()

  return {
    courseSelected: {
      value: courseSelected,
      Update: UpdateCourseSelected
    },
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

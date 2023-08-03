import { ReadCategoriesSelected, UpdateGenderCategory, UpdateSportCategory } from "./useCase";
import { ResetCatories } from "./useCase/Reset";

const ManageCategories = () => {
  return {
    categories: ReadCategoriesSelected(),
    UpdateGenderCategory: UpdateGenderCategory(),
    UpdateSportCategory: UpdateSportCategory(),
    ResetCatories: ResetCatories()
  };
};

export { ManageCategories };
 
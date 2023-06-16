import { ManageCategories } from "../../application/categories/ManageCategories";
import { Submit } from "../../utils/submit";

const InitCommunicationPageFind = () => {
  const { UpdateGenderCategory, UpdateSportCategory } = ManageCategories();

  return {
    UpdateSportCategory: UpdateSportCategory,
    UpdateGenderCategory: UpdateGenderCategory,
    Submit: Submit(),
  };
};

export { InitCommunicationPageFind };

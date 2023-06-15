import { ReadGenderCategory, UpdateGenderCategory } from "./useCase"

const ManageGenderCategory = () => { 
  return {
    genderCategory: ReadGenderCategory(),
    UpdateGenderCategory: UpdateGenderCategory(),
  };
};

export { ManageGenderCategory };
 

import { SetCategoryGender } from "../../../entities/DataForGameRegistration";
import { GenderCategoryProps } from "../../../entities/IDataForGameRegistration";
import { useAppDispatch } from "@redux-config/hook";

const UpdateGenderCategory = () => {
  const dispatch = useAppDispatch();

  return (genderCategoryPARAM: GenderCategoryProps) => {
    dispatch(SetCategoryGender(genderCategoryPARAM));
  };
};

export { UpdateGenderCategory };


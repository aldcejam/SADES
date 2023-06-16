import { GenderOptionsProps } from "src/defaultTypes/GendersProps";
import { useEffect } from "react";
import { ManageSelectedCategories } from "../../application/selectedCategories/ManageSelectedCategories";

type ConnectStatesProps = { 
    UpdateGenderCategory: (genderCategory: GenderOptionsProps) => void; 
    UpdateSportCategory: (sportCategory: string) => void;
  
};
const ConnectStates = ({UpdateGenderCategory , UpdateSportCategory}: ConnectStatesProps) => {
  const { selectedCategories,UpdateGenderSelected } = ManageSelectedCategories();

  return {
    useConnect: () => {
    useEffect(() => {
      selectedCategories.genderCategory
        ? UpdateGenderCategory(selectedCategories.genderCategory)
        : null;

      selectedCategories.sportCategory
        ? UpdateSportCategory(selectedCategories.sportCategory)
        : null;
    }, [selectedCategories]);
  }
}
};

export { ConnectStates, type ConnectStatesProps };

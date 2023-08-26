import { GenderOptionsProps } from "defaultTypes/GendersProps";
import { SportSelectedProps } from "../../entities/IDataForRegistrarDisputa";

interface VerifyIfCategoriesSelectedProps {
  sportCategorySelected: {
    value: string | undefined;
    Update: (sportCategory: string) => void;
  }
  sportSelected: {
    value: SportSelectedProps;
    Update: (sportSelected: SportSelectedProps) => void;
  }
  genderCategorySelected: {
    value: GenderOptionsProps | undefined;
    Update: (genderCategory: GenderOptionsProps) => void;
  }
}

const VerifyIfCategoriesSelected = ({
  sportCategorySelected,
  sportSelected,
  genderCategorySelected
}: VerifyIfCategoriesSelectedProps) => {

  if (!sportCategorySelected.value && sportSelected.value.sportCategories) {
    throw new Error("Categoria esportiva não selecionada");
  }
  if (!genderCategorySelected.value && sportSelected.value.genderCategories) {
    throw new Error("Categoria de gênero não selecionada");
  }

};

export { VerifyIfCategoriesSelected };

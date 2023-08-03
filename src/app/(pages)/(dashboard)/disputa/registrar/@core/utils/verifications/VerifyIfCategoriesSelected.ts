import { CategoriesProps, SportSelectedProps } from "../../entities/IDataForRegistrarDisputa"

type VerificationsProps = {
  sportSelected: SportSelectedProps
  categories: CategoriesProps;
}
const VerifyIfCategoriesSelected = ({ categories, sportSelected }: VerificationsProps) => {
  if (!categories.sportCategory && sportSelected.sportCategories) {
    throw new Error("Categoria esportiva não selecionada");
  }
  if (!categories.genderCategory && sportSelected.genderCategories) {
    throw new Error("Categoria de gênero não selecionada");
  }
  return true;
};

export { VerifyIfCategoriesSelected };

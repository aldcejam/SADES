import { CategoriesProps, SportSelectedProps } from "../../entities/IDataForBuscarDisputa";

type VerificationsProps = {
  sportSelected: SportSelectedProps
  categories: CategoriesProps

}
const Verifications = ({ categories, sportSelected }: VerificationsProps) => {
  if (!categories.sportCategory && sportSelected.sportCategories) {
    throw new Error("Categoria esportiva não selecionada");
  }
  if (!categories.genderCategory && sportSelected.genderCategories) {
    throw new Error("Categoria de gênero não selecionada");
  }
  return true;
};

export { Verifications };

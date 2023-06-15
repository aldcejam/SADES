import { CategoriesProps } from "../../entities/IDataForFindGame";


const Verifications = (categories: CategoriesProps) => {
  if (!categories.genderCategory) {
    throw new Error("Categoria de gênero não selecionada ou não existe");
  }
  if (!categories.sportCategory) {
    throw new Error("Categoria esportiva não selecionada ou não existe");
  }
  return true;
};

export { Verifications };

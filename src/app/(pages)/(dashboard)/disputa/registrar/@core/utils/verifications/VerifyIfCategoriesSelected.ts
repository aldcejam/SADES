import { PageDisputaRegistrarConnection } from "../../connection";
import { CategoriesProps, SportSelectedProps } from "../../entities/IDataForRegistrarDisputa"

type VerificationsProps = {
  sportSelected: SportSelectedProps
  categories: CategoriesProps;
}
const VerifyIfCategoriesSelected = () => {

  const { sportAndCourseSelected, genderAndSportCategorySelected } = PageDisputaRegistrarConnection()
  const { sportCategorySelected, genderCategorySelected } = genderAndSportCategorySelected


  const { sportSelected } = sportAndCourseSelected 

  return () => {
    if (!sportCategorySelected.value && sportSelected.value.sportCategories) {
      throw new Error("Categoria esportiva não selecionada");
    }
    if (!genderCategorySelected.value && sportSelected.value.genderCategories) {
      throw new Error("Categoria de gênero não selecionada");
    }
    return true; 
  }

};

export { VerifyIfCategoriesSelected };

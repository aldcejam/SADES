import { ManageCategories } from "../../application/categories/ManageCategories"
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected"
import { VerifyIfCategoriesSelected } from "../../utils/verifications/VerifyIfCategoriesSelected"

const InitCommunicationPageRegister = () => {
    const { categories, UpdateGenderCategory, UpdateSportCategory } = ManageCategories();
    const { sportSelected, UpdateSportSelected } = ManageSportSelected()


    return {
        sportSelected: {
            value: sportSelected,
            Update: UpdateSportSelected
        },
        sportCategorySelected: {
            value: categories.sportCategory,
            Update: UpdateSportCategory
        },
        genderCategorySelected: {
            value: categories.genderCategory,
            Update: UpdateGenderCategory
        },
        VerifyIfCategoriesSelected
    }
}

export { InitCommunicationPageRegister }
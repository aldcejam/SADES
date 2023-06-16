import { ManageGenderCategory } from "../../application/genderCategory/ManageGenderCategory"
import { ManageSportCategory } from "../../application/sportCategory/ManageSportCategory"

const InitCommunicationPageRegister = () => {
    const { UpdateSportCategory } = ManageSportCategory()
    const { UpdateGenderCategory } = ManageGenderCategory()

    return {
        UpdateSportCategory: UpdateSportCategory,
        UpdateGenderCategory: UpdateGenderCategory,
    }
}

export { InitCommunicationPageRegister }
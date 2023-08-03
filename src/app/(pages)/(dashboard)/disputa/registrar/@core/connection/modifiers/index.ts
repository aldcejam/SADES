import { ManageCourses } from "../../application/courses/ManageCourses"
import { ManageDate } from "../../application/date/ManageDate"
import { ManagePontuationbyPositions } from "../../application/pontuationByPositions/ManagePontuationbyPositions"
import { ManageSituation } from "../../application/situation/ManageSituation"
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected"
import { ManageCategories } from "../../application/categories/ManageCategories"

const PageRegisterStatesModifiers = () => {
    const { UpdateSportSelected } = ManageSportSelected()
    const { AddCourse, RemoveCourse } = ManageCourses()
    const { UpdateDate } = ManageDate()
    const { UpdateGenderCategory } = ManageCategories()
    const { UpdateSportCategory } = ManageCategories()
    const { UpdatePontuationbyPositions, UpdatePositionsCount } = ManagePontuationbyPositions()
    const { UpdateSituation } = ManageSituation()

    return {
        UpdateSport: UpdateSportSelected,
        ManageCourses: {
            AddCourse: AddCourse,
            RemoveCourse: RemoveCourse
        },
        UpdateDate: UpdateDate,
        UpdateGenderCategory: UpdateGenderCategory,
        UpdateSportCategory: UpdateSportCategory,
        ManagePontuationbyPositions: {
            UpdatePontuationbyPositions: UpdatePontuationbyPositions,
            UpdatePositionsCount: UpdatePositionsCount
        },
        UpdateSituation: UpdateSituation
    }
}

export { PageRegisterStatesModifiers }
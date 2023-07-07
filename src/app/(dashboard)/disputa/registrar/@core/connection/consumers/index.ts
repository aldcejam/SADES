import { GetSports } from "../../api/query/GetSports"
import { GetCourses } from "../../api/query/GetCourses"
import { ManageCourses } from "../../application/courses/ManageCourses"
import { ManageDate } from "../../application/date/ManageDate"
import { ManageCategories } from "../../application/categories/ManageCategories"
import { ManagePontuationbyPositions } from "../../application/pontuationByPositions/ManagePontuationbyPositions"
import { ManageSituation } from "../../application/situation/ManageSituation"
import { ManageSportSelected } from "../../application/sportSelected/ManageSportSelected"

const PageRegisterStatesConsumers = () => {
    const { sportSelected } = ManageSportSelected()
    const { coursesSelected } = ManageCourses()
    const { date } = ManageDate()
    const { genderCategory } = ManageCategories().categories
    const { sportCategory } = ManageCategories().categories
    const { pontuationbyPositions } = ManagePontuationbyPositions()
    const { situationSelected } = ManageSituation()

    return {
        dataFetch: {
            sports: GetSports,
            courses: GetCourses
        },
        sportSelected: sportSelected,
        coursesSelected: coursesSelected,
        date: date,
        genderCategory: genderCategory,
        sportCategory: sportCategory,
        pontuationbyPositions: pontuationbyPositions,
        situationSelected: situationSelected
    }
}

export { PageRegisterStatesConsumers }
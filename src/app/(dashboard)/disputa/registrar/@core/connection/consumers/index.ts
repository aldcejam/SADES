import { GetSports } from "../../api/query/GetSports"
import { GetCourses } from "../../api/query/GetCourses"
import { ManageCourses } from "../../application/courses/ManageCourses"
import { ManageDate } from "../../application/date/ManageDate"
import { ManageGenderCategory } from "../../application/genderCategory/ManageGenderCategory"
import { ManagePontuationbyPositions } from "../../application/pontuationByPositions/ManagePontuationbyPositions"
import { ManageSituation } from "../../application/situation/ManageSituation"
import { ManageSport } from "../../application/sport/ManageSport"
import { ManageSportCategory } from "../../application/sportCategory/ManageSportCategory"

const PageRegisterStatesConsumers = () => {
    const { sportSelected } = ManageSport()
    const { coursesSelected } = ManageCourses()
    const { date } = ManageDate()
    const { genderCategory } = ManageGenderCategory()
    const { sportCategory } = ManageSportCategory()
    const { pontuationbyPositions } = ManagePontuationbyPositions()
    const { situationSelected } = ManageSituation()

    return {
        dataFetch:{
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
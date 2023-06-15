import { ManageCourses } from "../../application/courses/ManageCourses"
import { ManageDate } from "../../application/date/ManageDate"
import { ManageGenderCategory } from "../../application/genderCategory/ManageGenderCategory"
import { ManagePontuationbyPositions } from "../../application/pontuationByPositions/ManagePontuationbyPositions"
import { ManageSituation } from "../../application/situation/ManageSituation"
import { ManageSport } from "../../application/sport/ManageSport"
import { ManageSportCategory } from "../../application/sportCategory/ManageSportCategory"

const PageRegisterStatesModifiers = () => {
    const { UpdateSport } = ManageSport()
    const { AddCourse, RemoveCourse } = ManageCourses()
    const { UpdateDate } = ManageDate()
    const { UpdateGenderCategory } = ManageGenderCategory()
    const { UpdateSportCategory } = ManageSportCategory()
    const { UpdatePontuationbyPositions, UpdatePositionsCount } = ManagePontuationbyPositions()
    const { UpdateSituation } = ManageSituation() 

    return {
        UpdateSport: UpdateSport,
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
import { ManageCategories } from "../application/categories/ManageCategories"
import { ManageSportSelected } from "../application/sportSelected/ManageSportSelected"
import { VerifyIfCategoriesSelected } from "../utils/verifications/VerifyIfCategoriesSelected";
import { ManageCourses } from "../application/courses/ManageCourses"
import { ManagePontuationbyPositions } from "../application/pontuationByPositions/ManagePontuationbyPositions";
import { ManageSituation } from "../application/situation/ManageSituation";
import { ManageDate } from "../application/date/ManageDate";
import { GetCourses } from "../api/query/GetCourses";
import { GetSports } from "../api/query/GetSports";
import { SituationsProps } from "../entities/IDataForRegistrarDisputa";

export const PageDisputaRegistrarConnection = () => {
    const { sportSelected, UpdateSportSelected, } = ManageSportSelected()
    const { coursesSelected, AddCourse, RemoveCourse } = ManageCourses()

    const { categories, UpdateGenderCategory, UpdateSportCategory } = ManageCategories();

    const { pontuationbyPositions, ReadPositionsCount, UpdatePontuationbyPositions, UpdatePositionsCount } = ManagePontuationbyPositions()
    const { situationSelected, UpdateSituation } = ManageSituation()
    const { date, UpdateDate } = ManageDate()

    return {
        availableCoursesAndSports: {
            availableCourses: GetCourses,
            availableSports: GetSports
        },
        sportAndCourseSelected: {
            sportSelected: {
                value: sportSelected,
                Update: UpdateSportSelected
            },
            selectCourse: {
                coursesSelected: coursesSelected,
                AddCourse: AddCourse,
                RemoveCourse: RemoveCourse
            }
        },
        genderAndSportCategorySelected: {
            genderCategorySelected: {
                value: categories.genderCategory,
                Update: UpdateGenderCategory
            },
            sportCategorySelected: {
                value: categories.sportCategory,
                Update: UpdateSportCategory
            },
        },
        disputeSettings: {
            date: {
                value: date,
                Update: UpdateDate
            },
            situation: {
                options: ["em_andamento", "pre_cadastrado"] as SituationsProps[],
                value: situationSelected,
                Update: UpdateSituation
            },
            pontuationbyPositions: {
                value: pontuationbyPositions,
                positionsCount: ReadPositionsCount,
                UpdatePontuationbyPositions: UpdatePontuationbyPositions,
                UpdatePositionsCount: UpdatePositionsCount,
            }
        },
        VerifyIfCategoriesSelected
    }
}
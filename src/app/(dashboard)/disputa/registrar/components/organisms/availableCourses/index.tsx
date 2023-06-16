"use client"
import { PageRegisterStatesConsumers } from "../../../@core/connection/consumers"
import { PageRegisterStatesModifiers } from "../../../@core/connection/modifiers"
import CourseCard from "../../molecules/courseCard"
import { StyledAvailableTeams } from "./styled"

const AvailableCourses = () => {

    const { dataFetch, coursesSelected } = PageRegisterStatesConsumers()
    const { courses } = dataFetch
    const { ManageCourses } = PageRegisterStatesModifiers()
    const { AddCourse, RemoveCourse } = ManageCourses

    const IsCourseSelected = ({ uuid }: { uuid: string }) => {
        const courseAlreadySelected = coursesSelected
            .find(course => course.uuid === uuid);

        if (courseAlreadySelected) {
            return true
        }
        return false

    }

    const ToggleSelectCourse = ({ uuid }: { uuid: string }) => {
        if (IsCourseSelected({ uuid })) {
            RemoveCourse({ uuid: uuid })
        } else {
            AddCourse({ uuid })
        }
    }


    return (
        <StyledAvailableTeams>
            <h2>Times disponíveis</h2>
            <div className="box-teams">
                {courses.map((course) => {
                    return (
                        <span
                            onClick={() => ToggleSelectCourse({ uuid: course.uuid })}
                            key={course.uuid}
                        >
                            <CourseCard
                                courseLogo={course.logo}
                                courseShortName={course.shortName}
                                isCardSelected={IsCourseSelected({ uuid: course.uuid })}
                            />
                        </span>
                    )
                })}
            </div>
        </StyledAvailableTeams>
    )
}

export default AvailableCourses
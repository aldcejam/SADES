"use client"
import Image from "next/image"
import styled from "./styled.module.scss"
import { PageDisputaRegistrarConnection } from "../../../../@core/connection"


const LogoCourses = () => {

    const { sportAndCourseSelected } = PageDisputaRegistrarConnection()
    const { coursesSelected } = sportAndCourseSelected.selectCourse

    return (
        <div className={styled["logo-courses"]}>
            {coursesSelected.map((course) => {
                return (
                    <div title={course.name} className={styled["card"]} key={course.uuid}>
                        <div className={styled["image"]} >
                            <Image alt={`logo do curso ${course.shortName}`}
                                sizes="100px"
                                src={course.logo}
                                fill />
                        </div>
                        <h2>{course.shortName}</h2>
                    </div>
                )
            })
            }
        </div>
    )
}

export default LogoCourses
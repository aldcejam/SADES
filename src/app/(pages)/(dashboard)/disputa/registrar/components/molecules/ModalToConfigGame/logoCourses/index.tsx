"use client"
import Image from "next/image"
import styled from "./styled.module.scss"
import { PageDisputaRegistrarConnection } from "../../../../@core/connection"
import { ComponentProps } from "react"

interface LogoCoursesProps extends ComponentProps<"article"> { }

const LogoCourses = ({ ...pros }: LogoCoursesProps) => {

    const { sportAndCourseSelected } = PageDisputaRegistrarConnection()
    const { coursesSelected } = sportAndCourseSelected.selectCourse

    return (
        <article
            {...pros}
            id={styled["logo-courses"]}>
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
        </article>
    )
}

export default LogoCourses
"use client"
import { PageRegisterStatesConsumers } from "../../../../@core/connection/consumers"
import Image from "next/image"
import styled from "./styled.module.scss"


const LogoCourses = () => {

    const { coursesSelected } = PageRegisterStatesConsumers()

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
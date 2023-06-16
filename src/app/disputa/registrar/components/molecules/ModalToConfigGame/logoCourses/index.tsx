"use client"
import { PageRegisterStatesConsumers } from "src/app/disputa/registrar/@core/connection/consumers"
import Image from "next/image"
import { StyledLogoCourses } from "./styled"


const LogoCourses = () => {

    const { coursesSelected } = PageRegisterStatesConsumers()

    return (
        <StyledLogoCourses>
            {coursesSelected.map((course) => {
                return (
                    <div title={course.name} className="card" key={course.uuid}>
                        <div className="image" >
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
        </StyledLogoCourses>
    )
}

export default LogoCourses
"use client"
import { PageRegisterStatesConsumers } from "../../../@core/connection/consumers"
import { GenderOptionsProps } from "defaultTypes/GendersProps"
import SelectSportButton from "../../atoms/selectSportButton"

import styled from "./styled.module.scss"

export type UpdateSportsProps = {
    sportName: string,
    sportUUID: string,
    genderCategories?: GenderOptionsProps[]
    sportCategories?: string[]
    minNumberOfCourses: number
    maxNumberOfCourses: number
}
type AvailableSportsProps = {
    UpdateSport: (sport: UpdateSportsProps) => void
}
const AvailableSports = ({ UpdateSport }: AvailableSportsProps) => {

    const { dataFetch, sportSelected } = PageRegisterStatesConsumers()
    const { sports } = dataFetch
    return (
        <div>
            <h2 className={styled["title"]}>Escolha o esporte</h2>
            <div className={styled["box-sports"]}>
                {sports.map((sport) => {
                    return (
                        <span
                            key={sport.sportName}
                            onClick={() => UpdateSport({
                                sportName: sport.sportName,
                                sportUUID: sport.uuid,
                                genderCategories: sport.genderCategories,
                                sportCategories: sport.sportCategories,
                                minNumberOfCourses: sport.minNumberOfCourses,
                                maxNumberOfCourses: sport.maxNumberOfCourses
                            })}>
                            <SelectSportButton
                                value={sport.sportName}
                                isSelected={sport.uuid == sportSelected?.sportUUID ? true : false}
                            />
                        </span>
                    )
                })
                }
            </div>
        </div>
    )
}

export default AvailableSports
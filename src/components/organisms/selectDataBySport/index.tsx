import styled from "./styled.module.scss"
import HoverSportButton from "components/atoms/hoverSportButton"
import { SportSelectedProps } from "app/(pages)/(dashboard)/disputa/buscar/@core/entities/IDataForBuscarDisputa"
import { GenderOptionsProps } from "defaultTypes/GendersProps"

type SelectDataBySportProps = {
    ToggleModal: () => void
    listSports: Array<any | { sportName: string }>
    UpdateSportSelected: ({ genderCategories, sportCategories, sportName, sportUUID }: SportSelectedProps) => void
}

const SelectDataBySport = ({ ToggleModal, listSports, UpdateSportSelected }: SelectDataBySportProps) => {

    const handleButtonSport = (sportData: {
        sportUUID: string;
        sportName: string;
        sportCategories?: string[];
        genderCategories?: GenderOptionsProps[];
    }) => {
        UpdateSportSelected({
            genderCategories: sportData.genderCategories,
            sportCategories: sportData.sportCategories,
            sportName: sportData.sportName,
            sportUUID: sportData.sportUUID

        })
        ToggleModal()
    }

    return (
        <div className={styled["select-data-by-sport"]}>
            <ul className={styled["sports"]}>
                {listSports.map((sport) => {
                    return (
                        <li
                            className="sport"
                            onClick={() => handleButtonSport(sport)}
                            key={sport.sportName}>
                            <HoverSportButton nameButton={sport.sportName} />
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default SelectDataBySport
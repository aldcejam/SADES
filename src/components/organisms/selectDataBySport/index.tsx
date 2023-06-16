import { StyledSelectDataBySport } from "./styled"
import HoverSportButton from "src/components/atoms/hoverSportButton"
import { SelectedSportDataProps } from "src/components/templates/modals/modalSelectCategories/@core/entities/IDataToSelectCategories"
import { GenderOptionsProps } from "src/defaultTypes/GendersProps"

export type UpdateSportsProps = {
    sportName: string,
    sportUUID: string,
    genderCategories?: GenderOptionsProps[]
    sportCategories?: string[]
}

type SelectDataBySportProps = {
    ToggleModal: () => void
    listSports: Array<any | { sportName: string }>
    UpdateSport: ({ genderCategories, sportCategories, sportName, sportUUID }: UpdateSportsProps) => void
}

const SelectDataBySport = ({ ToggleModal, listSports, UpdateSport }: SelectDataBySportProps) => {

    const handleButtonSport = (sportData: SelectedSportDataProps) => {
        UpdateSport({
            genderCategories: sportData.genderCategories,
            sportCategories: sportData.sportCategories,
            sportName: sportData.sportName,
            sportUUID: sportData.sportUUID

        })
        ToggleModal()
    }

    return (
        <StyledSelectDataBySport>
            <ul className="sports">
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
        </StyledSelectDataBySport >
    )
}

export default SelectDataBySport
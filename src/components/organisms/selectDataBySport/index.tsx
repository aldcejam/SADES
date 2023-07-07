import { StyledSelectDataBySport } from "./styled"
import HoverSportButton from "components/atoms/hoverSportButton"
import { SportSelectedProps } from "app/(dashboard)/disputa/buscar/@core/entities/IDataForFindGame"
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
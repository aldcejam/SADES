import { ModalSelectCategoriesStatesConsumer } from "components/templates/modals/modalSelectCategories/@core/connection/consumer"
import ButtonSelectGender from "components/atoms/buttons/selectGender"
import { StyledGenderOptions } from "./styled"
import { GenderOptionsProps } from "defaultTypes/GendersProps"


const GenderOptions = () => {
    const { selectedSportData } = ModalSelectCategoriesStatesConsumer()

    return (
        <StyledGenderOptions >
            {selectedSportData?.genderCategories?.map((gender: GenderOptionsProps) => {
                return (
                    <ButtonSelectGender
                        key={gender}
                        gender={gender}
                    />
                )
            })}
        </StyledGenderOptions>
    )
}

export default GenderOptions 
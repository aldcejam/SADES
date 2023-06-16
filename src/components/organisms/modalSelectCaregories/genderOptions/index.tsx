import { ModalSelectCategoriesStatesConsumer } from "src/components/templates/modals/modalSelectCategories/@core/connection/consumer"
import ButtonSelectGender from "src/components/atoms/buttons/selectGender"
import { StyledGenderOptions } from "./styled"
import { GenderOptionsProps } from "src/defaultTypes/GendersProps"


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
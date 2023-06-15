import { ModalSelectCategoriesStatesConsumer } from "src/@core-components/modalSelectCategories/connection/consumer"
import ButtonSelectGender from "src/components/atoms/buttons/selectGender"
import { StyledGenderOptions } from "./styled"


const GenderOptions = () => {
    const { selectedSportData } = ModalSelectCategoriesStatesConsumer()

    return (
        <StyledGenderOptions >
            {selectedSportData?.genderCategories?.map((gender) => {
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
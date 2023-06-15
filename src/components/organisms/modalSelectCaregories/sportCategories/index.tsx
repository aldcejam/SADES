import { ModalSelectCategoriesStatesConsumer } from "src/@core-components/modalSelectCategories/connection/consumer"
import ButtonSelectSport from "src/components/atoms/buttons/selectSport"
import { StyledSportCategories } from "./styled"

const SportCategories = () => {

    const { selectedSportData } = ModalSelectCategoriesStatesConsumer()

    return (
        <StyledSportCategories>
            {selectedSportData?.sportCategories?.map((category) => {
                return (
                    <ButtonSelectSport
                        key={category}
                        category={category}
                    />
                )
            })}
        </StyledSportCategories>
    )
}

export default SportCategories  
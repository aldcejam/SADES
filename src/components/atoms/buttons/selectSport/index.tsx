import { ModalSelectCategoriesStatesConsumer } from 'src/@core-components/modalSelectCategories/connection/consumer';
import { ModalSelectCategoriesStatesModifiers } from 'src/@core-components/modalSelectCategories/connection/modifiers';
import { memo } from 'react';
import { StyledButtonSelectSport } from './styled';


type ButtonSelectSportProps = {
    category: string
}
const ButtonSelectSport = ({ category }: ButtonSelectSportProps) => {

    const { selectedCategoriesModifiers } = ModalSelectCategoriesStatesModifiers()
    const { selectedCategoriesStates } = ModalSelectCategoriesStatesConsumer()

    return (
        <StyledButtonSelectSport 
            data-is-selected={category == selectedCategoriesStates.sportCategory}
            onClick={() => { selectedCategoriesModifiers.UpdateSportSelected(category) }}
            >
            <p>{category}</p>
        </StyledButtonSelectSport>
    )
}
export default memo(ButtonSelectSport) 
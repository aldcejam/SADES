import { ModalSelectCategoriesStatesConsumer } from 'components/templates/modals/modalSelectCategories/@core/connection/consumer';
import { ModalSelectCategoriesStatesModifiers } from 'components/templates/modals/modalSelectCategories/@core/connection/modifiers';
import { memo } from 'react';
import styled from './styled.module.scss';


type ButtonSelectSportProps = {
    category: string
}
const ButtonSelectSport = ({ category }: ButtonSelectSportProps) => {

    const { selectedCategoriesModifiers } = ModalSelectCategoriesStatesModifiers()
    const { selectedCategoriesStates } = ModalSelectCategoriesStatesConsumer()

    return (
        <div className={styled["button-select-sport"]}
            data-is-selected={category == selectedCategoriesStates.sportCategory}
            onClick={() => { selectedCategoriesModifiers.UpdateSportSelected(category)}}
            >
            <p>{category}</p>
        </div>
    )
}
export default memo(ButtonSelectSport) 
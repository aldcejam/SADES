import { memo } from 'react';
import { ModalSelectCategoriesStatesConsumer } from 'components/templates/modals/modalSelectCategories/@core/connection/consumer';
import { ModalSelectCategoriesStatesModifiers } from 'components/templates/modals/modalSelectCategories/@core/connection/modifiers';
import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import IllustrationByGender from '../../illustrationByGender';
import styled from './styled.module.scss';


type ButtonSelectGenderProps = {
    gender: GenderOptionsProps
}
const ButtonSelectGender = ({ gender }: ButtonSelectGenderProps) => {

    const { selectedCategoriesModifiers } = ModalSelectCategoriesStatesModifiers()
    const { selectedCategoriesStates } = ModalSelectCategoriesStatesConsumer()

    function TranslateGenderToPortuguese(gender: string) {
        switch (gender) {
            case "female":
                return "feminino";
            case "male":
                return "masculino";
            case "mixed":
                return "misto";
        }
    }

    return (
        <div
            className={styled["button-select-gender"]}
            data-is-selected={gender == selectedCategoriesStates.genderCategory}
            onClick={() => selectedCategoriesModifiers.UpdateGenderSelected(gender)}
        >
            <div className={styled["illustration"]}>
                <IllustrationByGender gender={gender}/>
            </div>
            <p>{TranslateGenderToPortuguese(gender)}</p>
        </div>
    )
}
export default memo(ButtonSelectGender) 
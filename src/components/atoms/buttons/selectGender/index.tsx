import { memo } from 'react';
import { ModalSelectCategoriesStatesConsumer } from 'src/components/templates/modals/modalSelectCategories/@core/connection/consumer';
import { ModalSelectCategoriesStatesModifiers } from 'src/components/templates/modals/modalSelectCategories/@core/connection/modifiers';
import { GenderOptionsProps } from 'src/defaultTypes/GendersProps';
import IllustrationByGender from '../../illustrationByGender';
import { StyledButtonSelectGender } from './styled';


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
        <StyledButtonSelectGender
            data-is-selected={gender == selectedCategoriesStates.genderCategory}
            onClick={() => selectedCategoriesModifiers.UpdateGenderSelected(gender)}
        >
            <div className="illustration">
                <IllustrationByGender gender={gender}/>
            </div>
            <p>{TranslateGenderToPortuguese(gender)}</p>
        </StyledButtonSelectGender>
    )
}
export default memo(ButtonSelectGender) 
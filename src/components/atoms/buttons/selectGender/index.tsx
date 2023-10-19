import { memo } from 'react';
import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import IllustrationByGender from './illustrationByGender';
import styled from './styled.module.scss';

type ButtonSelectGenderProps = {
  gender: GenderOptionsProps;
  isSelect?: boolean;
  updateGenderCategorySelected: (genderCategory: any) => void;
};
const ButtonSelectGender = ({
  gender,
  updateGenderCategorySelected,
  isSelect = false,
}: ButtonSelectGenderProps) => {
  function TranslateGenderToPortuguese(gender: string) {
    switch (gender) {
      case 'female':
        return 'feminino';
      case 'male':
        return 'masculino';
      case 'mixed':
        return 'misto';
    }
  }

  return (
    <button
      className={styled['button-select-gender']}
      data-is-selected={isSelect}
      onClick={() => updateGenderCategorySelected(gender)}
      aria-label={`Selecionar categoria de gênero ${gender}`}
    >
      <div className={styled['illustration']}>
        <IllustrationByGender gender={gender} />
      </div>
      <p>{TranslateGenderToPortuguese(gender)}</p>
    </button>
  );
};
export default memo(ButtonSelectGender);

import { memo } from 'react';
import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import { IllustrationByGender } from './illustrations/getIllustration';
import styled from './styled.module.scss';

export type ButtonSelectGenderProps = {
  gender: GenderOptionsProps;
  isSelect?: boolean;
  updateGenderCategorySelected: (genderCategory: any) => void;
};

export const TranslateGenderToPortuguese = (gender: string) => {
  switch (gender) {
    case 'female':
      return 'feminino';
    case 'male':
      return 'masculino';
    case 'mixed':
      return 'misto';
  }
}

const ButtonSelectGender = ({
  gender,
  updateGenderCategorySelected,
  isSelect = false,
}: ButtonSelectGenderProps) => {

  return (
    <button
      className={styled['button-select-gender']}
      data-is-selected={isSelect}
      onClick={() => updateGenderCategorySelected(gender)}
      aria-label={`Selecionar categoria de gênero ${TranslateGenderToPortuguese(gender)}`}
    >
      <div className={styled['illustration']}>
        <IllustrationByGender gender={gender} />
      </div>
      <p>{TranslateGenderToPortuguese(gender)}</p>
    </button>
  );
};
export default memo(ButtonSelectGender);

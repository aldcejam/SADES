import { memo } from 'react';
import { GenderOptionsProps } from 'defaultTypes/GendersProps';
import IllustrationByGender from './illustrationByGender';
import styled from './styled.module.scss';

type ButtonSelectGenderProps = {
  gender: GenderOptionsProps;
  genderCategorySelected: string | undefined;
  updateGenderCategorySelected: (genderCategory: any) => void;
};
const ButtonSelectGender = ({
  gender,
  genderCategorySelected,
  updateGenderCategorySelected,
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
    <div
      className={styled['button-select-gender']}
      data-is-selected={gender == genderCategorySelected}
      onClick={() => updateGenderCategorySelected(gender)}
    >
      <div className={styled['illustration']}>
        <IllustrationByGender gender={gender} />
      </div>
      <p>{TranslateGenderToPortuguese(gender)}</p>
    </div>
  );
};
export default memo(ButtonSelectGender);

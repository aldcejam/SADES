import ButtonSelectGender from 'components/atoms/buttons/selectGender';
import styled from './styled.module.scss';
import { GenderOptionsProps as GenderOptionsInterface } from 'defaultTypes/GendersProps';

type GenderOptionsProps = {
  genderCategories: GenderOptionsInterface[];
  genderCategorySelected: string | undefined;
  updateGenderCategorySelected: (genderCategory: any) => void;
};

const GenderOptions = ({
  genderCategories,
  genderCategorySelected,
  updateGenderCategorySelected,
}: GenderOptionsProps) => {
  return (
    <div className={styled['gender-options']}>
      {genderCategories?.map((gender: GenderOptionsInterface) => {
        return (
          <ButtonSelectGender
            key={gender}
            gender={gender}
            isSelect={gender == genderCategorySelected}
            updateGenderCategorySelected={updateGenderCategorySelected}
          />
        );
      })}
    </div>
  );
};

export default GenderOptions;

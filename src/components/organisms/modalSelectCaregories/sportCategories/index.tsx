import ButtonSelectSport from 'components/atoms/buttons/selectSport';
import styled from './styled.module.scss';

type SportCategoriesProps = {
  sportCategories: string[];
  updateSportCategorySelected: (category: string) => void;
  sportCategorySelected: string | undefined;
};

const SportCategories = ({
  sportCategories,
  sportCategorySelected,
  updateSportCategorySelected,
}: SportCategoriesProps) => {
  return (
    <div
      data-lenght={sportCategories.length % 2}
      className={styled['sport-categories']}
    >
      {sportCategories.map((category) => {
        return (
          <ButtonSelectSport
            key={category}
            category={category}
            sportCategorySelected={sportCategorySelected}
            updateSportCategorySelected={updateSportCategorySelected}
            className={styled['button-select-sport']}
          />
        );
      })}
    </div>
  );
};

export default SportCategories;

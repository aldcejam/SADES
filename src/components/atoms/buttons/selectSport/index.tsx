import { ComponentProps, memo } from 'react';
import styled from './styled.module.scss';

type ButtonSelectSportProps = ComponentProps<'button'> & {
  category: string;
  updateSportCategorySelected: (category: string) => void;
  sportCategorySelected: string | undefined;
};
const ButtonSelectSport = ({
  category,
  sportCategorySelected,
  updateSportCategorySelected,
  ...props
}: ButtonSelectSportProps) => {
  return (
    <button
      id={styled['button-select-sport']}
      data-is-selected={category == sportCategorySelected}
      onClick={() => {
        updateSportCategorySelected(category);
      }}
      aria-label={`Selecionar categoria esportiva ${category}`}
      {...props}
    >
      <p>{category}</p>
    </button>
  );
};
export default memo(ButtonSelectSport);

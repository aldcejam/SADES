import { ComponentProps, memo } from 'react';
import styled from './styled.module.scss';

type ButtonSelectSportProps = ComponentProps<'div'> & {
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
    <div
      {...props}
      id={styled['button-select-sport']}
      data-is-selected={category == sportCategorySelected}
      onClick={() => {
        updateSportCategorySelected(category);
      }}
    >
      <p>{category}</p>
    </div>
  );
};
export default memo(ButtonSelectSport);

import { memo } from 'react';
import styled from './styled.module.scss';


type ButtonSelectSportProps = {
    category: string
    updateSportCategorySelected: (category: string) => void
    sportCategorySelected: string | undefined
}
const ButtonSelectSport = ({ category, sportCategorySelected, updateSportCategorySelected }: ButtonSelectSportProps) => {
    return (
        <div className={styled["button-select-sport"]}
            data-is-selected={category == sportCategorySelected}
            onClick={() => { updateSportCategorySelected(category) }}
        >
            <p>{category}</p>
        </div>
    )
}
export default memo(ButtonSelectSport) 
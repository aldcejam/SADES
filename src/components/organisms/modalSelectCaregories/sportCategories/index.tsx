import ButtonSelectSport from "components/atoms/buttons/selectSport"
import { StyledSportCategories } from "./styled"

type SportCategoriesProps = {
    sportCategories: string[]
    updateSportCategorySelected: (category: string) => void
    sportCategorySelected: string | undefined
}

const SportCategories = ({ sportCategories, sportCategorySelected, updateSportCategorySelected }: SportCategoriesProps) => {
    return (
        <StyledSportCategories>
            {sportCategories.map((category) => {
                return (
                    <ButtonSelectSport
                        key={category}
                        category={category}
                        sportCategorySelected={sportCategorySelected}
                        updateSportCategorySelected={updateSportCategorySelected}
                    />
                )
            })}
        </StyledSportCategories>
    )
}

export default SportCategories  
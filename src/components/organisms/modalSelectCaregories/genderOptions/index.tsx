import ButtonSelectGender from "components/atoms/buttons/selectGender"
import { StyledGenderOptions } from "./styled"
import { GenderOptionsProps as GenderOptionsInterface } from "defaultTypes/GendersProps"

type GenderOptionsProps = {
    genderCategories: GenderOptionsInterface[]
    genderCategorySelected: string | undefined
    updateGenderCategorySelected: (genderCategory: any) => void
}

const GenderOptions = ({ genderCategories, genderCategorySelected, updateGenderCategorySelected }: GenderOptionsProps) => {

    return (
        <StyledGenderOptions >
            {genderCategories?.map((gender: GenderOptionsInterface) => {
                return (
                    <ButtonSelectGender
                        genderCategorySelected={genderCategorySelected}
                        updateGenderCategorySelected={updateGenderCategorySelected}
                        key={gender}
                        gender={gender}
                    />
                )
            })}
        </StyledGenderOptions>
    )
}

export default GenderOptions 
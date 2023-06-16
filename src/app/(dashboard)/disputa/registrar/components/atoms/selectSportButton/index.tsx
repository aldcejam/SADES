import { StyledSelectSportButton } from "./styled"

type SelectSportButtonProps = {
    value: string
    isSelected: boolean
}
const SelectSportButton = ({value,isSelected}: SelectSportButtonProps)=>{
    return(
        <StyledSelectSportButton 
        data-is-button-selected={isSelected}>
            {value}
        </StyledSelectSportButton>
    )
}

export default SelectSportButton
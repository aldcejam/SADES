import styled from "./styled.module.scss"

type SelectSportButtonProps = {
    value: string
    isSelected: boolean
}
const SelectSportButton = ({value,isSelected}: SelectSportButtonProps)=>{
    return(
        <div className={styled["select-sport-button"]}
        data-is-button-selected={isSelected}>
            {value}
        </div>
    )
}

export default SelectSportButton
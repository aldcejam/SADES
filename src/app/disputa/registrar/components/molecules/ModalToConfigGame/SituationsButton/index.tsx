"use client"
import { StyledSituationsButton } from "./styled"

type SituationsButtonProps = {
    Submit: () => void
    value: "pre-cadastrado" | "em andamento"
    isSelected: boolean
}
const SituationsButton = ({ Submit, value, isSelected }: SituationsButtonProps) => {
    return (
        <StyledSituationsButton
            onClick={() => Submit()}
            data-is-active={isSelected}>
            <div className="content">
                <div className={`ball ${value == "pre-cadastrado" ? "blue-ball-illustration" : "blue-green-illustration"}`}
                />
                <p>
                    {value}
                </p>
            </div>
        </StyledSituationsButton>
    )
}

export default SituationsButton
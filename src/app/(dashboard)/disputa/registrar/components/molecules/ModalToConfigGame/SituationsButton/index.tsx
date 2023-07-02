import styled from "./styled.module.scss"

type SituationsButtonProps = {
    Submit: () => void
    value: "pre-cadastrado" | "em andamento"
    isSelected: boolean
}
const SituationsButton = ({ Submit, value, isSelected }: SituationsButtonProps) => {
    return (
        <div
            className={styled["situations-button"]}
            onClick={() => Submit()}
            data-is-active={isSelected}>
            <div className={styled["content"]}>
                <div
                    className={styled["ball"]}
                    data-ball-situation={value}
                />
                <p>
                    {value}
                </p>
            </div>
        </div>
    )
}

export default SituationsButton
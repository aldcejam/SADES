import { ComponentProps } from "react"
import styled from "./styled.module.scss"

export type GameSituationProps = ComponentProps<"div"> & {
    situation: "andamento" | "finalizada" | "pre-cadastrada"
    size?: "small" | "medium" | "large"
}
const GameSituation = ({ situation, size = "small", ...props }: GameSituationProps) => {
    return (
        <div
            {...props}
            data-size={size}
            id={styled["game-situation"]}>
            <div className={styled["circle"]} />
            <p>{situation}</p>
        </div>
    )
}

export default GameSituation
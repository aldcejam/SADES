import styled from "./styled.module.scss"

type GameSituationProps = {
    situation: string
}
const GameSituation = ({situation}: GameSituationProps) => {
    return (
        <div className={styled["game-situation"]}>
            <div className={styled["circle"]} />
            <p>{situation}</p>
        </div>
    )
}

export default GameSituation
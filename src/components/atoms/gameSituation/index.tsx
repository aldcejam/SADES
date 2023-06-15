import { StyledGameSituation } from "./styled"

type GameSituationProps = {
    situation: string
}
const GameSituation = ({situation}: GameSituationProps) => {
    return (
        <StyledGameSituation>
            <div className={`circle`} />
            <p>{situation}</p>
        </StyledGameSituation>
    )
}

export default GameSituation
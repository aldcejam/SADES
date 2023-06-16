import { StyledGameSpecification } from "./styled"
import { GameProps } from "../../../@core/api/query/GameProps"
import GameSituation from "src/components/atoms/gameSituation"

type GameSpecificationProps = {
    game: GameProps
}
const GameSpecification = ({ game }: GameSpecificationProps) => {
    const date = `
        ${(game.specification.date).getUTCDate()} /
        ${(game.specification.date).getMonth()} /
        ${(game.specification.date).getFullYear()}
    `

    const applyIconVersus = (currentTeam: number, lastTeamWithoutIcon: number) => {
        if (currentTeam < lastTeamWithoutIcon) {
            return (
                <div className="confront--icon-versus" />
            )

        } else {
            return null
        }
    }

    return (
        <StyledGameSpecification>
            <div className="teams-competing">
                {game.placar.map((team, index, array) => {
                    return (
                        <div key={team.course} className="teams-competing__confront">
                            <p className="confront--team">
                                {team.course}
                            </p>
                            {
                                applyIconVersus(index, array.length - 1)
                            }
                        </div>
                    )
                })}
            </div>
            <GameSituation situation={game.specification.situation} />
            <time
                className="game-date"
                dateTime={game.specification.date.toString()}>
                {date}
            </time>
        </StyledGameSpecification>
    )
}

export default GameSpecification
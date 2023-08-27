import styled from "./styled.module.scss"
import { GameProps } from "../../../@core/api/query/GameProps"
import GameSituation from "components/atoms/gameSituation"

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
        <div className={styled["game-specification"]}>
            <div className={styled["teams-competing"]}>
                {game.placar.map((team, index, array) => {
                    return (
                        <div key={team.course} className={styled["teams-competing__confront"]}>
                            <p className={styled["confront--team"]}>
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
                className={styled["game-date"]}
                dateTime={game.specification.date.toString()}>
                {date}
            </time>
        </div>
    )
}

export default GameSpecification
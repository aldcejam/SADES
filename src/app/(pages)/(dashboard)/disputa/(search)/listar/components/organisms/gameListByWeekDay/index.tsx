import GameCard from "../../template/gameCard"
import { GameProps } from "../../../@core/api/query/GameProps"
import styled from "./styled.module.scss"

type GameListByWeekDayProps = {
    day: string
    games: GameProps[]
}
const GameListByWeekDay = ({ games, day }: GameListByWeekDayProps) => {

    return (
        <div className={styled["game-list-by-week-day"]}>
            {
                games.map((game) => {
                    return (
                        game.specification.date.toDateString().split(" ")[0] == day
                            ?
                            <GameCard
                                key={game.id}
                                game={game}
                            />
                            :
                            null
                    )
                })
            }
        </div>
    )
}

export default GameListByWeekDay
import GameCard from "../../template/gameCard"
import { GameProps } from "../../../@core/api/query/GameProps"
import styled from "./styled.module.scss"
import Link from "next/link"

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
                            <Link  href={`/disputa/partida/32`}>
                                <GameCard
                                    key={game.id}
                                    game={game}
                                />
                            </Link>
                            :
                            null
                    )
                })
            }
        </div>
    )
}

export default GameListByWeekDay
import GameCard from "../../template/gameCard"
import { GameProps } from "../../../@core/api/query/GameProps" 
import { StyledGameListByWeekDay } from "./styled"

type GameListByWeekDayProps = {
    day: string
    games: GameProps[]
}
const GameListByWeekDay = ({ games, day }: GameListByWeekDayProps) => {


    return (
        <StyledGameListByWeekDay>
            {
                games.map((game) => {
                    return (
                        game.specification.date.toDateString().split(" ")[0] == day
                            ?
                            <GameCard key={game.id} game={game} />
                            :
                            null
                    )
                })
            }
        </StyledGameListByWeekDay>
    )
}

export default GameListByWeekDay
import CurverBorderButton from "../../../../../../../public/Polygon/CurverBorder"
import GameSpecification from "../../molecules/gameSpecification"
import TeamVersus from "../../organisms/teamVersus"
import { StyledGameCard } from "./styled"
import { GameProps } from "../../../../../../use/FetchGames/GameProps"

type GameCardProps = {
    game: GameProps
}
const GameCard = ({ game }: GameCardProps) => {


    return (
        <StyledGameCard>
            <CurverBorderButton />
            <div className="game-score">
                <span className="team-versus">
                    <TeamVersus placar={game.placar} />
                </span>
                <GameSpecification game={game} />
            </div>
        </StyledGameCard>
    )
}
export default GameCard
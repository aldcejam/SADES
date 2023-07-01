import CurverBorderButton from "public/Polygon/CurverBorder"
import GameSpecification from "../../molecules/gameSpecification"
import TeamVersus from "../../organisms/teamVersus"
import styled from "./styled.module.scss"
import "./styled.scss"
import { GameProps } from "../../../@core/api/query/GameProps"

type GameCardProps = {
    game: GameProps
}
const GameCard = ({ game }: GameCardProps) => { 
    return (
        <div className={styled["game-card"]}>
            <CurverBorderButton />
            <div className={styled["game-score"]}>
                <span className={styled["team-versus"]}>
                    <TeamVersus placar={game.placar} />
                </span>
                <GameSpecification game={game} />
            </div>
        </div>
    )
}
export default GameCard
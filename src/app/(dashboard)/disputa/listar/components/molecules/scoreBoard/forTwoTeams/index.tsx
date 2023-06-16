import Image from "next/image"
import { StyleForTwoTeams } from "./styled"
import { ScoreboardGameProps } from "../../../../@core/api/query/GameProps";
import CloseIcon from '@mui/icons-material/Close';

const ForTwoTeams = ({ placar }: ScoreboardGameProps) => {

    const applyIconVersus = (currentTeam: number) => {
        const firstTeam = 0
        if (currentTeam == firstTeam) {
            return (
                <CloseIcon className="icon-versus"/>
            )

        }else{
            return null
        }
    }

    return (
        <StyleForTwoTeams>
            {
                placar.map((team, index) => {
                    return (
                        <div key={team.course} className="team">
                            <div className="team__logo">
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} layout="fill" />
                            </div>
                            <div className="team__score">
                                {team.score}
                            </div>
                            {applyIconVersus(index)}
                        </div>
                    )
                })
            }
        </StyleForTwoTeams>
    )
}

export default ForTwoTeams
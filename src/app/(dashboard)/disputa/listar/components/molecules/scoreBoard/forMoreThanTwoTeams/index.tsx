import Image from "next/image"
import { ScoreboardGameProps } from "../../../../@core/api/query/GameProps";
import { StyleForMoreThanTwoTeams } from "./styled"
import CloseIcon from '@mui/icons-material/Close';



const ForMoreThanTwoTeams = ({ placar }: ScoreboardGameProps) => {

    const applyIconVersus = (currentTeam: number, lastTeamWithoutIcon: number) => {
        if (currentTeam < lastTeamWithoutIcon) {
            return (
                <CloseIcon className="icon-versus"/>
            )

        }else{
            return null
        }
    }
    return (
        <StyleForMoreThanTwoTeams>
            {
                placar.map((team, index, arrayPlacar) => {
                    return (
                        <div key={team.course} className="team">
                            <div className="team__logo">
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} layout="fill" />
                            </div>
                            {applyIconVersus(index, arrayPlacar.length -1 )}
                        </div>
                    )
                })
            }
        </StyleForMoreThanTwoTeams >
    )
}
export default ForMoreThanTwoTeams
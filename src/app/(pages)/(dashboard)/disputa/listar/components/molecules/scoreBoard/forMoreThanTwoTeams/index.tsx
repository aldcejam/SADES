import Image from "next/image"
import { ScoreboardGameProps } from "../../../../@core/api/query/GameProps";
import styled from "./styled.module.scss"
import CloseIcon from '@mui/icons-material/Close';
  
const ForMoreThanTwoTeams = ({ placar }: ScoreboardGameProps) => {

    const applyIconVersus = (currentTeam: number, lastTeamWithoutIcon: number) => {
        if (currentTeam < lastTeamWithoutIcon) {
            return (
                <CloseIcon className={styled["icon-versus"]} />
            )

        } else {
            return null
        }
    }
    return (
        <div className={styled["for-more-than-two-teams"]}>
            {
                placar.map((team, index, arrayPlacar) => {
                    return (
                        <div key={team.course} className={styled["team"]}>
                            <div className={styled["team__logo"]}>
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} fill sizes="50px"/>
                            </div>
                            {applyIconVersus(index, arrayPlacar.length - 1)}
                        </div>
                    )
                })
            }
        </div >
    )
}
export default ForMoreThanTwoTeams
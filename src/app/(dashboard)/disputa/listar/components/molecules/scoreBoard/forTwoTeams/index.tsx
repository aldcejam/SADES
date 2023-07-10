import Image from "next/image"
import styled from "./styled.module.scss"
import { ScoreboardGameProps } from "../../../../@core/api/query/GameProps";
import CloseIcon from '@mui/icons-material/Close';

const ForTwoTeams = ({ placar }: ScoreboardGameProps) => {

    const applyIconVersus = (currentTeam: number) => {
        const firstTeam = 0
        if (currentTeam == firstTeam) {
            return (
                <CloseIcon className={styled["icon-versus"]}/>
            )

        }else{
            return null
        }
    }

    return (
        <div className={styled["for-two-teams"]}>
            {
                placar.map((team, index) => {
                    return (
                        <div key={team.course} className={styled["team"]}>
                            <div className={styled["team__logo"]}>
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} fill/>
                            </div>
                            <div className={styled["team__score"]}>
                                {team.score}
                            </div>
                            {applyIconVersus(index)}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ForTwoTeams
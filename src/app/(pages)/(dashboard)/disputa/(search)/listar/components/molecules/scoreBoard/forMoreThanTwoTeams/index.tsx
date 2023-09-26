import Image from "next/image"
import { ScoreboardGameProps } from "../../../../@core/api/query/GameProps";
import styled from "./styled.module.scss"
import CloseIcon from '@mui/icons-material/Close';

const ForMoreThanTwoTeams = ({ placar }: ScoreboardGameProps) => {

    return (
        <div className={styled["for-more-than-two-teams"]}>
            {
                placar.map((team, index, arrayPlacar) => {
                    return (
                        <div key={team.course} className={styled["team"]}>
                            <div className={styled["team__logo"]}>
                                <Image alt={`logo do curso ${team.course}`} src={team.logo} fill sizes="50px" />
                            </div>
                            {index < arrayPlacar.length - 1 ? <span className={styled["icon-versus"]}>vs</span> : null}
                        </div>
                    )
                })
            }
        </div >
    )
}
export default ForMoreThanTwoTeams
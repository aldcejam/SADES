"use client"
import styled from "./styled.module.scss"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { PageDisputaRegistrarConnection } from "app/(pages)/(dashboard)/disputa/registrar/@core/connection"

const SelectPontuations = () => {

    const { disputeSettings } = PageDisputaRegistrarConnection()
    const { UpdatePositionsCount } = disputeSettings.pontuationbyPositions

    return (
        <div className={styled["select-pontuations"]}>
            <h3 className={styled["title"]}>Posições com Pontuação</h3>
            <span className={styled["container-select"]}>
                <ChevronRightIcon className={styled["icon"]} />
                <select
                    className={styled["select"]}
                    onChange={(e) => UpdatePositionsCount(e.target.value as unknown as number)}
                >
                    <option value={1}>1 equipe com pontuação</option>;
                    <option value={2}>2 equipe com pontuação</option>;
                    <option selected value={3}>3 equipe com pontuação</option>;
                    <option value={4}>4 equipe com pontuação</option>;
                    <option value={5}>5 equipe com pontuação</option>;
                </select>
            </span>
        </div>
    )
}

export default SelectPontuations
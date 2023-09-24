"use client"
import CloseIcon from '@mui/icons-material/Close'
import ModalTemplate from "components/templates/modals/modalTemplate"
import { SportSelectedProps } from "../../../@core/entities/IDataForBuscarDisputa"
import { usePageBuscarDisputa } from "../../../context"
import styled from "./styled.module.scss"

interface ModalSelectOtherSportsProps {
    otherSports: SportSelectedProps[]
    handleSelectSport: (sport: SportSelectedProps) => void
}
const ModalSelectOtherSports = ({ otherSports, handleSelectSport }: ModalSelectOtherSportsProps) => {

    const { modalSelectOtherSports } = usePageBuscarDisputa();

    return (
        <ModalTemplate
            modal={{
                state: modalSelectOtherSports.value,
                Toggle: modalSelectOtherSports.Toggle
            }}
        >
            <div className={styled["modal-select-other-sports"]}>
                <CloseIcon onClick={() => modalSelectOtherSports.Toggle()} className={styled['close-icon']} />
                {otherSports.map((sport) => {
                    return (
                        <button key={sport.sportName} onClick={() => handleSelectSport(sport)}>
                            {sport.sportName}
                        </button>
                    )
                })}
            </div>
        </ModalTemplate>
    )
}

export { ModalSelectOtherSports }

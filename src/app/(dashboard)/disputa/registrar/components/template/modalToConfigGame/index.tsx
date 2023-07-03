"use client"
import PontuationByPosition from "../../organisms/ModalToConfigGame/pontuationByPosition";
import styled from "./styled.module.scss"
import LogoCourses from "../../molecules/ModalToConfigGame/logoCourses";
import SituationGame from "../../organisms/ModalToConfigGame/situationGame";
import CloseIcon from '@mui/icons-material/Close';
import GameDate from "../../organisms/ModalToConfigGame/gameDate";
import SubmitButton from "components/atoms/submit";
import ModalTemplate from "components/templates/modals/modalTemplate";
import { PageRegisterStatesConsumers } from "../../../@core/connection/consumers";
import { GenderOptionsProps } from "defaultTypes/GendersProps";


type ModalToConfigGameProps = {
    modalIsOpen: boolean,
    ToggleModal: () => void,
}
const ModalToConfigGame = ({ ToggleModal, modalIsOpen }: ModalToConfigGameProps) => {

    const TranslateGenderCategory = (genderCategoryInEnglish: GenderOptionsProps) => {
        switch (genderCategoryInEnglish) {
            case "male":
                return "masculino"
            case "female":
                return "feminino"
            case "mixed":
                return "misto" 
        }
    }

    const { sportSelected, genderCategory, sportCategory } = PageRegisterStatesConsumers()
    const title = `${sportSelected?.sportName} 
    ${sportCategory ? `- ${sportCategory}` : ""} 
    ${genderCategory ? `- ${TranslateGenderCategory(genderCategory)}` : ""}`


    return (
        <ModalTemplate
            modalIsOpen={modalIsOpen}
        >
            <div className={styled["modal-to-config-game"]}>
                <CloseIcon onClick={() => ToggleModal()} className={styled['close-icon']} />
                <h2>{title}</h2>
                <div className={styled["container"]}>
                    <article className={styled["teams"]}>
                        <LogoCourses />
                    </article>
                    <div className={styled["situation"]}>
                        <SituationGame
                        />
                    </div>
                    <div className={styled["game-date"]}>
                        <GameDate />
                    </div>
                    <div className={styled["pontuations"]}>
                        <PontuationByPosition />
                    </div>
                    <div className={styled["create-game-button"]}>
                        <SubmitButton
                            Submit={function ala() { }}
                            value="Cria Disputa" />
                    </div>
                </div>
            </div>
        </ModalTemplate>
    )
}

export default ModalToConfigGame

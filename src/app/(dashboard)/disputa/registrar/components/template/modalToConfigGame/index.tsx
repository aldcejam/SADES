"use client"
import { StyledModalToConfigGame } from "./styled"
import PontuationByPosition from "../../organisms/ModalToConfigGame/pontuationByPosition";
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
            <StyledModalToConfigGame>
                <CloseIcon onClick={() => ToggleModal()} className='close-icon' />
                <h2>{title}</h2>
                <div className="container">
                    <article className="teams">
                        <LogoCourses />
                    </article>
                    <div className="situation">
                        <SituationGame
                        />
                    </div>
                    <div className="game-date">
                        <GameDate />
                    </div>
                    <div className="pontuations">
                        <PontuationByPosition />
                    </div>
                    <div className="create-game-button">
                        <SubmitButton
                            Submit={function ala() { }}
                            value="Cria Disputa" />
                    </div>
                </div>
            </StyledModalToConfigGame>
        </ModalTemplate>
    )
}

export default ModalToConfigGame

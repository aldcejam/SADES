"use client"
import PontuationByPosition from "../../organisms/ModalToConfigGame/pontuationByPosition";
import styled from "./styled.module.scss"
import LogoCourses from "../../molecules/ModalToConfigGame/logoCourses";
import SituationGame from "../../organisms/ModalToConfigGame/situationGame";
import GameDate from "../../organisms/ModalToConfigGame/gameDate";
import SubmitButton from "components/atoms/submit";
import ModalTemplate from "components/templates/modals/modalTemplate";
import { GenderOptionsProps } from "defaultTypes/GendersProps";
import { PageDisputaRegistrarConnection } from "../../../@core/connection";
import { usePageRegistrarDisputa } from "../../../context";


const ModalToConfigGame = () => {

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

    const { genderAndSportCategorySelected, sportAndCourseSelected } = PageDisputaRegistrarConnection()
    const sportSelected = sportAndCourseSelected.sportSelected.value

    const { genderCategorySelected, sportCategorySelected } = genderAndSportCategorySelected
    const genderCategory = genderCategorySelected.value
    const sportCategory = sportCategorySelected.value

    const title = `${sportSelected?.sportName} 
    ${sportCategory ? `- ${sportCategory}` : ""} 
    ${genderCategory ? `- ${TranslateGenderCategory(genderCategory)}` : ""}`

    const { modalToConfigGame } = usePageRegistrarDisputa()

    return (
        <ModalTemplate
            modal={modalToConfigGame}
        >
            <div className={styled["modal-to-config-game"]}>
                <h2>{title}</h2>
                <div className={styled["container"]}>
                    <LogoCourses className={styled["teams"]} />
                    <SituationGame className={styled["situation"]} />
                    {/* <GameDate className={styled["game-date"]} /> */}
                    <PontuationByPosition className={styled["pontuations"]} />
                    <SubmitButton
                        className={styled["create-game-button"]}
                        Submit={function ala() { }}
                        value="Cria Disputa" />
                </div>
            </div>
        </ModalTemplate>
    )
}

export default ModalToConfigGame

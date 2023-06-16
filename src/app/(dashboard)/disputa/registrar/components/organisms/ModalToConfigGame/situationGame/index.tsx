"use client"
import { PageRegisterStatesModifiers } from '../../../../@core/connection/modifiers';
import { PageRegisterStatesConsumers } from '../../../../@core/connection/consumers';
import SituationsButton from '../../../molecules/ModalToConfigGame/SituationsButton';
import { StyledSituationGame } from "./styled"

const SituationGame = () => {

    const { UpdateSituation } = PageRegisterStatesModifiers()
    const { situationSelected } = PageRegisterStatesConsumers()

    const situations: ["em andamento", "pre-cadastrado"] = ["em andamento", "pre-cadastrado"]


    return (
        <StyledSituationGame>
            <p className="title">Situação do jogo:</p>
            <span
                className="buttons"
            >
                {situations.map((situation) => {
                    return (
                        <SituationsButton
                            key={situation}
                            value={situation}
                            Submit={() => UpdateSituation(situation)}
                            isSelected={situationSelected == situation ? true : false}
                        />
                    )
                })}
            </span>

        </StyledSituationGame>
    )
}

export default SituationGame
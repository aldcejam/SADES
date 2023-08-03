"use client"
import { PageRegisterStatesModifiers } from '../../../../@core/connection/modifiers';
import { PageRegisterStatesConsumers } from '../../../../@core/connection/consumers';
import SituationsButton from 'app/(pages)/(dashboard)/disputa/registrar/components/molecules/ModalToConfigGame/situationButtons';
import styled from "./styled.module.scss"

const SituationGame = () => {

    const { UpdateSituation } = PageRegisterStatesModifiers()
    const { situationSelected } = PageRegisterStatesConsumers()

    const situations: ["em andamento", "pre-cadastrado"] = ["em andamento", "pre-cadastrado"]
 
    return (
        <div className={styled["situation-game"]}>
            <p className={styled["title"]}>Situação do jogo:</p>
            <span
                className={styled["buttons"]}
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

        </div>
    )
}

export default SituationGame
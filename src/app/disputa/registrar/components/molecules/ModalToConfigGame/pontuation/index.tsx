"use client"
import { PageRegisterStatesModifiers } from "src/app/disputa/registrar/@core/connection/modifiers"
import { PageRegisterStatesConsumers } from "src/app/disputa/registrar/@core/connection/consumers"
import { StyledPontuation } from "./styled"

const Pontuation = () => {


    const {ManagePontuationbyPositions} = PageRegisterStatesModifiers()
    const {pontuationbyPositions} = PageRegisterStatesConsumers()
     
    const UpdatePontuationbyPositions = ManagePontuationbyPositions.UpdatePontuationbyPositions



    return (
        <StyledPontuation>
            {
                pontuationbyPositions.map((pontuation, position) => {
                    return (
                        <div key={position}>
                            <p>{position + 1}º</p>
                            <input
                                type="number"
                                value={pontuation}
                                onChange={(e) => {
                                    const newPontuations = [...pontuationbyPositions];
                                    newPontuations[position] = Number(e.target.value);
                                    UpdatePontuationbyPositions(newPontuations);
                                }
                                } />
                        </div>
                    )
                })}
        </StyledPontuation>
    )
}

export default Pontuation
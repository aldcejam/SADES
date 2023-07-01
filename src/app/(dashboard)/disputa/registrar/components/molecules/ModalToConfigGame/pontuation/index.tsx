"use client"
import { PageRegisterStatesModifiers } from "app/(dashboard)/disputa/registrar/@core/connection/modifiers"
import { PageRegisterStatesConsumers } from "app/(dashboard)/disputa/registrar/@core/connection/consumers"
import styled from "./styled.module.scss"

const Pontuation = () => { 
    const {ManagePontuationbyPositions} = PageRegisterStatesModifiers()
    const {pontuationbyPositions} = PageRegisterStatesConsumers()
     
    const UpdatePontuationbyPositions = ManagePontuationbyPositions.UpdatePontuationbyPositions
 
    return (
        <div className={styled["pontuation"]}>
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
        </div>
    )
}

export default Pontuation
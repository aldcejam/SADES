"use client"
import { useState } from "react";
import ButtonToTemplateStateToggle from "../../atoms/buttonToTemplateStateToggle";
import Form from "../../organisms/ModifyUserData/form";
import { StyledModifyUserData } from "./styled";

const ModifyUserData = () => {
    const [isOpenComponentPersonaData, setIsOpenComponentPersonaData] = useState(false)
    const ToggleComponentPersonaData = () => {
        isOpenComponentPersonaData ? setIsOpenComponentPersonaData(false) : setIsOpenComponentPersonaData(true)
    }
 
    return (
        <StyledModifyUserData
            className={`is-open-component-${isOpenComponentPersonaData.toString()}`}
            layout
            data-isOpen={isOpenComponentPersonaData}
        >
            <ButtonToTemplateStateToggle
                title="Modifique suas informações"
                state={isOpenComponentPersonaData}
                ToggleState={ToggleComponentPersonaData} 
                />
            <Form title="Modifique suas informações"/>
        </StyledModifyUserData >
    );
};

export default ModifyUserData;

"use client"
import { SuapClient } from "services/Login-Suap/SuapClient/SuapClient"
import { StyledButtonLoginSuap } from "./styled"

const ButtonLoginSuap = () => {

    const NewSuapClient = SuapClient()

    return (
        <StyledButtonLoginSuap>
            <a
                onClick={() => NewSuapClient.Login()}
            >
                <p className="icon">suap</p>
            </a>
        </StyledButtonLoginSuap>
    )
}

export default ButtonLoginSuap
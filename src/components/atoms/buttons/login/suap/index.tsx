"use client"
import { SuapClient } from "services/Login-Suap/SuapClient/SuapClient"
import styled from "./styled.module.scss"

const ButtonLoginSuap = () => {

    const NewSuapClient = SuapClient()

    return (
        <div className={styled["button-login-suap"]}>
            <a
                onClick={() => NewSuapClient.Login()}
            >
                <p className={styled["icon"]}>suap</p>
            </a>
        </div>
    )
}

export default ButtonLoginSuap
"use client"
import styled from "./styled.module.scss"
import { useSession, signOut } from "next-auth/react";
import { SuapClient } from "services/Login-Suap/SuapClient/SuapClient";
import { BiLogOutCircle } from "react-icons/bi";

const ButtonLogOut = () => {

    const { data: session, status } = useSession()
    const NewSuapClient = SuapClient();

    const HanddleLogOut = () => {
        if (status == "authenticated") {
            signOut()
        }
        else if (NewSuapClient.isAuthenticated()) {
            NewSuapClient.Logout()
        }
    }


    return (
        <div className={`${styled["button-log-out"]} button-log-out`} onClick={() => HanddleLogOut()}>
            <div className={styled["icon"]}>
                <BiLogOutCircle />
            </div>
            <p>sair</p>
        </div>
    )
}

export default ButtonLogOut
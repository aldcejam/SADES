"use client"
import styled from "./styled.module.scss"
import { useSession, signOut } from "next-auth/react"; 
import { BiLogOutCircle } from "react-icons/bi";

const ButtonLogOut = () => {

    const { data: session, status } = useSession() 

    const HanddleLogOut = () => {
        if (status == "authenticated") {
            signOut()
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
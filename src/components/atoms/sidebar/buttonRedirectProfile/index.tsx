import Link from "next/link"
import { Routes } from "../../../../../Routes"
import ButtonRedirectPerfil from "../../buttons/redirectPerfil"
import styled from "./styled.module.scss"

const ButtonRedirectProfile = () => {
    return (
        <Link href={Routes.profile} >
            <div className={styled["button-redirect-profile"]}>
                <ButtonRedirectPerfil />
                <p>Perfil</p>
            </div>
        </Link>
    )
}

export default ButtonRedirectProfile
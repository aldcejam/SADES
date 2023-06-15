import Link from "next/link"
import { Routes } from "../../../../../Routes"
import ButtonRedirectPerfil from "../../buttons/redirectPerfil"
import { StyledButtonRedirectProfile } from "./styled"

const ButtonRedirectProfile = () => {
    return (
        <Link href={Routes.profile} >
            <StyledButtonRedirectProfile>
                <ButtonRedirectPerfil />
                <p>Perfil</p>
            </StyledButtonRedirectProfile>
        </Link>
    )
}

export default ButtonRedirectProfile
import { StyledButtonLogOut } from "./styled"
import { useSession, signOut } from "next-auth/react";
import { SuapClient } from "src/services/Login-Suap/SuapClient/SuapClient";
import LogOutIcon from "../../../../../public/Icons/LogOut"

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
        <StyledButtonLogOut className="button-log-out" onClick={() => HanddleLogOut()}>
            <div className="icon">
                <LogOutIcon />
            </div>
            <p>sair</p>
        </StyledButtonLogOut>
    )
}

export default ButtonLogOut
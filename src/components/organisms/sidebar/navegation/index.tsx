import { useSidebarStateContext } from "contexts/SidebarStateContext";
import { StyledNavegation } from "./styled"
import { Routes } from "@base-project/Routes";
import RedirectOptionSidebar from "components/atoms/sidebar/redirectOptionSidebar";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import ButtonRedirectProfile from "components/atoms/sidebar/buttonRedirectProfile";

const Navegation = () => { 
    const { CloseSidebar, sidebarState } = useSidebarStateContext()
    return (
        <StyledNavegation>
            <ul className="container">
                <span className="icons-redirects-top" onClick={CloseSidebar}>
                    <RedirectOptionSidebar
                        href={Routes.home}
                        icon={<AiOutlineHome />}
                        text="Home"
                        title="Ir para a página inicial"
                        
                    />
                </span>
                <li onClick={CloseSidebar}>
                    <ButtonRedirectProfile />
                </li>
                <span className={`divider sidebar${sidebarState}`} />
                <RedirectOptionSidebar
                    title="sair de sua conta"
                    href="/"
                    icon={<AiOutlineLogin className="outLoginIcon" />}
                    text="Sair"
                />
            </ul >
        </StyledNavegation>
    )
}
export default Navegation
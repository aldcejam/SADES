import { Routes } from "@base-project/Routes";
import ButtonRedirectProfile from "components/atoms/sidebar/buttonRedirectProfile";
import RedirectOptionSidebar from "components/atoms/sidebar/redirectOptionSidebar";
import { useSidebarStateContext } from "contexts/SidebarStateContext";
import { AiOutlineHome, AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import styled from "./styled.module.scss";
import DarkModeButton from "components/atoms/buttons/darkMode";

const Navegation = () => {
    const { CloseSidebar, sidebarState } = useSidebarStateContext()
    return (
        <div className={styled["navegation"]}>
            <ul className={styled["container"]}>
                <span className={styled["icons-redirects-top"]} onClick={CloseSidebar}>
                    <RedirectOptionSidebar
                        href={Routes.home}
                        icon={<AiOutlineHome />}
                        text="Home"
                        title="Ir para a página inicial"
                    />
                    <RedirectOptionSidebar
                        href={Routes.profile}
                        icon={<AiOutlineUser />}
                        text="Perfil"
                        title="Ir para seu prefil"
                    />
                </span>
                <li onClick={CloseSidebar}>
                    <RedirectOptionSidebar
                        href={Routes.profile}
                        icon={<DarkModeButton />}
                        text="Perfil"
                        title="Ir para seu prefil"
                    />
                </li>
                <span
                    className={styled["divider"]}
                    data-sidebar-state={sidebarState}
                />
                <RedirectOptionSidebar
                    title="sair de sua conta"
                    href="/"
                    icon={<AiOutlineLogin className={styled["outLoginIcon"]} />}
                    text="Sair"
                />
            </ul >
        </div>
    )
}
export default Navegation
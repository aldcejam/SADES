import { Routes } from "@base-project/Routes";
import ButtonRedirectProfile from "components/atoms/sidebar/buttonRedirectProfile";
import OptionSidebar from "components/atoms/sidebar/options";
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
                    <OptionSidebar
                        href={Routes().home}
                        icon={<AiOutlineHome />}
                        text="Home"
                        title="Ir para a página inicial"
                    />
                    <OptionSidebar
                        href={Routes().profile}
                        icon={<AiOutlineUser />}
                        text="Perfil"
                        title="Ir para seu prefil"
                    />
                </span>
                <li onClick={CloseSidebar}>
                    <OptionSidebar 
                        icon={<DarkModeButton />}
                        text="Tema"
                        title="Ir para seu prefil"
                    />
                </li>
                <span
                    className={styled["divider"]}
                    data-sidebar-state={sidebarState}
                />
                <OptionSidebar
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
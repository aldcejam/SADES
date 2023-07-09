import { Routes } from "@base-project/Routes";
import ButtonRedirectProfile from "components/atoms/sidebar/buttonRedirectProfile";
import RedirectOptionSidebar from "components/atoms/sidebar/redirectOptionSidebar";
import { useSidebarStateContext } from "contexts/SidebarStateContext";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import styled from "./styled.module.scss";

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
                </span>
                <li onClick={CloseSidebar}>
                    <ButtonRedirectProfile />
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
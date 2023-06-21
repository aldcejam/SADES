"use client"
import { useSidebarStateContext } from "contexts/SidebarStateContext";
import MenuBurguer from "components/atoms/menuBurguer";
import Navegation from "components/organisms/sidebar/navegation";
import { StyledSidebar } from "./styled";


const Sidebar = () => {
    const { sidebarState } = useSidebarStateContext()

    return (
        <StyledSidebar menuisactive={sidebarState.toString()}>
            <MenuBurguer/>
            <Navegation />
        </StyledSidebar>
    )
}

export default Sidebar;
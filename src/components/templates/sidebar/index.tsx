"use client"
import { useSidebarStateContext } from "src/contexts/SidebarStateContext";
import MenuBurguer from "src/components/atoms/menuBurguer";
import Navegation from "src/components/organisms/sidebar/navegation";
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
"use client"
import { useSidebarStateContext } from "contexts/SidebarStateContext"
import StyledMenuBurguer from "./styled"

const MenuBurguer = () => {
    const { sidebarState, ToggleStateSidebar } = useSidebarStateContext()
    
    return (
        <StyledMenuBurguer 
        menuisactive={sidebarState.toString()} 
        onClick={() => ToggleStateSidebar()}
        >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </StyledMenuBurguer>
        
    )
}

export default MenuBurguer;
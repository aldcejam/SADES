"use client"
import { useSidebarStateContext } from "contexts/SidebarStateContext"
import styled from "./styled.module.scss"

const MenuBurguer = () => {
    const { sidebarState, ToggleStateSidebar } = useSidebarStateContext()

    return (
        <div className={styled["menu-burguer"]}
            data-menu-state={sidebarState.toString()}
            onClick={() => ToggleStateSidebar()}
        >
            <div className={styled["line"]}></div>
        </div>

    )
}

export default MenuBurguer;
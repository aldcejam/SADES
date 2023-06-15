
import { createContext, ReactNode, useContext, useState } from "react";

interface ChildrenProps {
    children: ReactNode;
}
interface SidebarStateContextProps {
    sidebarState: boolean
    CloseSidebar: () => void
    OpenSidebar: () => void
    ToggleStateSidebar: () => void
}
const SidebarStateContext = createContext<SidebarStateContextProps>({} as SidebarStateContextProps);


export const SidebarStateProvider = ({ children }: ChildrenProps) => {
    const [sidebarState, setSidebarState] = useState<boolean>(false)

    const ToggleStateSidebar = () => {
        setSidebarState(!sidebarState)
    }
    const CloseSidebar = () => {
        setSidebarState(false)
    }
    const OpenSidebar = () => {
        setSidebarState(true)
    }

    return (
        <SidebarStateContext.Provider value={{CloseSidebar, OpenSidebar, ToggleStateSidebar, sidebarState}}>
            {children}
        </SidebarStateContext.Provider>
    )

}

export const useSidebarStateContext = () => {
    return useContext(SidebarStateContext)
}


"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface PageContextProps {
    modalSelectCategories: {
        modalIsOpen: boolean
        ToggleModal: () => void
    } 
}
 
const PageContext = createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ToggleModalSelectCategories = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <PageContext.Provider value={{
            modalSelectCategories: {
                modalIsOpen: isModalOpen,
                ToggleModal: ToggleModalSelectCategories
            },
        }}>
            {children}
        </PageContext.Provider>
    )

}

export const usePageBuscarDisputa = () => {
    return useContext(PageContext)
}


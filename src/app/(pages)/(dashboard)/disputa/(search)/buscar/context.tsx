"use client"
import { createContext, ReactNode, useContext, useState } from "react";
import { PageDisputaBuscarConnection } from "./@core/connection";
import { VerifyIfSportIsSelected } from "./@core/utils/verifyIfSportIsSelected";
import { toast } from "react-toastify";

interface PageContextProps {
    modalSelectCategories: {
        modalIsOpen: boolean
        ToggleModal: () => void
    }
}

const PageContext = createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {

    const { sportSelected } = PageDisputaBuscarConnection()

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const ToggleModalSelectCategories = () => {
        try {
            VerifyIfSportIsSelected({ sportSelected: sportSelected.value })
            setIsModalOpen(!isModalOpen)
        } catch (err: any) {
            toast.error(err.message)
        }
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


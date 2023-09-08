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
    modalSelectOtherSports: {
        modalIsOpen: boolean
        ToggleModal: () => void
    }
}

const PageContext = createContext<PageContextProps>({} as PageContextProps);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {

    const { sportSelected } = PageDisputaBuscarConnection()

    const [modalSelectCategories, setModalSelectCategories] = useState(false);
    const [modalSelectOtherSports, setModalSelectOtherSports] = useState(false);

    const ToggleModalSelectCategories = () => {
        try {
            VerifyIfSportIsSelected({ sportSelected: sportSelected.value })
            setModalSelectCategories(!modalSelectCategories)
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const ToggleModalSelectOtherSports = () => {
        setModalSelectOtherSports(!modalSelectOtherSports)
    }


    return (
        <PageContext.Provider value={{
            modalSelectCategories: {
                modalIsOpen: modalSelectCategories,
                ToggleModal: ToggleModalSelectCategories
            },
            modalSelectOtherSports:{
                modalIsOpen: modalSelectOtherSports,
                ToggleModal: ToggleModalSelectOtherSports
            }
        }}>
            {children}
        </PageContext.Provider>
    )

}

export const usePageBuscarDisputa = () => {
    return useContext(PageContext)
}


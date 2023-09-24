"use client"
import { createContext, ReactNode, useContext, useState } from "react";
import { PageDisputaBuscarConnection } from "./@core/connection";
import { VerifyIfSportIsSelected } from "./@core/utils/verifyIfSportIsSelected";
import { toast } from "react-toastify";

interface PageContextProps {
    modalSelectCategories: {
        value: boolean
        Toggle: () => void
    }
    modalSelectOtherSports: {
        value: boolean
        Toggle: () => void
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
                value: modalSelectCategories,
                Toggle: ToggleModalSelectCategories
            },
            modalSelectOtherSports:{
                value: modalSelectOtherSports,
                Toggle: ToggleModalSelectOtherSports
            }
        }}>
            {children}
        </PageContext.Provider>
    )

}

export const usePageBuscarDisputa = () => {
    return useContext(PageContext)
}


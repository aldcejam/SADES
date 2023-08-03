import { InitCommunicationBuscarDisputa } from './@core/connection/initCommunication';
import { useSearchParams } from 'next/navigation';
import { useState } from "react";

export const DisputaBuscar_Logic = () => {
    const searchParams = useSearchParams()
    const course = searchParams.get('curso')

    // @Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ToggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    // @Core page
    const { genderCategorySelected, sportCategorySelected, listSport, Submit, sportSelected } = InitCommunicationBuscarDisputa()

    return {
        course,
        isModalOpen,
        ToggleModal,
        sportSelected,
        Submit,
        listSport,
        genderCategorySelected,
        sportCategorySelected
    }
}
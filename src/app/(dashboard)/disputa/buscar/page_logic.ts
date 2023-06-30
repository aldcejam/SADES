import { UpdateSportsProps } from 'components/organisms/selectDataBySport';
import { InitCommunicationModalSelectCategories } from 'components/templates/modals/modalSelectCategories/@core/connection/initCommunication';
import { PageFindStatesConsumers } from './@core/connection/consumers';
import { InitCommunicationPageFind } from './@core/connection/initCommunication';
import { PageFindStatesModifiers } from './@core/connection/modifiers';
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
    const { UpdateGenderCategory, UpdateSportCategory, Submit } = InitCommunicationPageFind()
    const { listSport } = PageFindStatesConsumers()
    const { UpdateSport } = PageFindStatesModifiers()

    // @Core modalSelectCategories
    const { UpdateSelectedSportData } = InitCommunicationModalSelectCategories({
        UpdateGenderCategory,
        UpdateSportCategory
    })

    // @Connection with modalSelectCategories
    const UpdateSports = ({ sportName, sportUUID, genderCategories, sportCategories }: UpdateSportsProps) => {
        UpdateSelectedSportData({
            sportName, sportUUID, genderCategories, sportCategories
        })
        UpdateSport({ sportName, uuid: sportUUID })
    }

    return {
        course,
        isModalOpen,
        ToggleModal,
        UpdateSports,
        Submit,
        listSport
    }
}
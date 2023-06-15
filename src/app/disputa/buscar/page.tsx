"use client"
import { useSearchParams } from 'next/navigation';
import { useState } from "react";

import ContentPage from 'src/app/layout-style/ContentPage';

import ModalSelectCategories from "src/components/templates/modals/modalSelectCategories";
import ListSports from './components/template/listSports';

import { InitCommunicationModalSelectCategories } from 'src/@core-components/modalSelectCategories/connection/initCommunication';
import { InitCommunicationPageFind } from './@core/connection/initCommunication';
import { UpdateSportsProps } from 'src/components/organisms/selectDataBySport';
import PageTitle from 'src/components/atoms/pageTitle';
import { StyledFindGame } from './styled';
import { PageFindStatesConsumers } from './@core/connection/consumers'; 
import { PageFindStatesModifiers } from './@core/connection/modifiers';
 
const Find = () => {

    const searchParams = useSearchParams()
    const course = searchParams.get('curso')

    const [isModalOpen, setIsModalOpen] = useState(false);
    const ToggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }
    console.log(isModalOpen)

    const { UpdateGenderCategory, UpdateSportCategory, Submit } = InitCommunicationPageFind()
    const { listSport } = PageFindStatesConsumers()
    const { UpdateSport } = PageFindStatesModifiers()

    const { UpdateSelectedSportData } = InitCommunicationModalSelectCategories({
        UpdateGenderCategory,
        UpdateSportCategory
    })

    const UpdateSports = ({ sportName, sportUUID, genderCategories, sportCategories }: UpdateSportsProps) => {
        UpdateSelectedSportData({
            sportName, sportUUID, genderCategories, sportCategories
        })
        UpdateSport({ sportName, uuid: sportUUID })
    }


    return (
        <>
            <PageTitle title='Pesquisar por jogo' />
            <ContentPage className='with-boxshadow-in-bg'>
                <StyledFindGame className="box-page">
                    <div className="background" />
                    <div className='content'>
                        <ListSports
                            ToggleModal={ToggleModal}
                            course={course ? course : "não há curso selecionado no seu perfil"}
                            UpdateSport={UpdateSports}
                            listSports={listSport}
                        />
                        <ModalSelectCategories
                            isModalOpen={isModalOpen}
                            ToggleModal={ToggleModal}
                            SubmitModal={Submit}
                        />
                    </div>
                </StyledFindGame>
            </ContentPage>
        </>
    )
}

export default Find
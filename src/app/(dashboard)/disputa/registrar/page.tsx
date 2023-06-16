"use client"
import PageTitle from "src/components/atoms/pageTitle"
import ContentPage from "src/app/(dashboard)/layout-style/ContentPage"

import { StyledDisputaRegistrar } from "./styled"

import ModalSelectCategories from "src/components/templates/modals/modalSelectCategories"
import ModalToConfigGame from "./components/template/modalToConfigGame"

import ChooseDispute from "./components/template/chooseDispute"
import { DisputaRegistrar_Logic } from "./page_logic"
 
export default function Page() {

    const {
        UpdateSports,
        modalSelectCategorysOpen,
        modalToConfigGame,
        ToggleModalSelectCategories,
        ToggleModalToConfigGame
    } = DisputaRegistrar_Logic() 

    return (
        <>
            <PageTitle title='Registrar disputa' />
            <ContentPage  className='with-boxshadow-in-bg'>
                <StyledDisputaRegistrar className="box-page">
                    <div className="style-background" />
                    <div className="container">
                        <ChooseDispute
                            UpdateSelectedSportData={UpdateSports}
                            Submit={() => ToggleModalSelectCategories()}
                        />
                        <ModalSelectCategories
                            isModalOpen={modalSelectCategorysOpen}
                            ToggleModal={ToggleModalSelectCategories}
                            SubmitModal={() => ToggleModalToConfigGame()}
                        />
                        <ModalToConfigGame
                            modalIsOpen={modalToConfigGame}
                            ToggleModal={ToggleModalToConfigGame}
                        />
                    </div>
                </StyledDisputaRegistrar>
            </ContentPage>
        </>
    )
}
 
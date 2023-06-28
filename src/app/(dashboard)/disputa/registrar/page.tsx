"use client"
import PageTitle from "components/atoms/pageTitle"
import styled from "app/(dashboard)/layout.module.scss"

import { StyledDisputaRegistrar } from "./styled"

import ModalSelectCategories from "components/templates/modals/modalSelectCategories"
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
            <section
                className={styled["content-page"]}
                data-boxshadow_in_bg="true"
            >
                <StyledDisputaRegistrar className={styled["box-page"]}>
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
            </section>
        </>
    )
}

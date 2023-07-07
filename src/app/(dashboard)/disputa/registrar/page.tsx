"use client"
import PageTitle from "components/atoms/pageTitle"
import styled from "app/(dashboard)/layout.module.scss"

import styledPage from "./styled.module.scss"

import ModalToConfigGame from "./components/template/modalToConfigGame"

import ChooseDispute from "./components/template/chooseDispute"
import { DisputaRegistrar_Logic } from "./page_logic"
import { ModalSelectCategories } from "components/templates/modals/modalSelectCategories"
import { useAppSelector } from "@redux-config/hook"
import { DataForGameRegistrationStates } from "./@core/entities/DataForGameRegistration"

export default function Page() {

    const {
        modalSelectCategoriesOpen,
        ToggleModalSelectCategories,
        /*  */
        modalToConfigGame,
        ToggleModalToConfigGame,
        /*  */
        sportSelected,
        genderCategorySelected,
        sportCategorySelected,
    } = DisputaRegistrar_Logic()

    console.log(useAppSelector(DataForGameRegistrationStates))

    return (
        <>
            <PageTitle title='Registrar disputa' />
            <section
                className={styled["content-page"]}
                data-boxshadow_in_bg="true"
            >
                <div className={`${styled["box-page"]} ${styledPage["page-diputa-registrar"]}`}>
                    <div className={styledPage["container"]}>
                        <ChooseDispute
                            UpdateSelectedSportData={sportSelected.Update}
                            Submit={() => ToggleModalSelectCategories()}
                        />
                        <ModalSelectCategories.Root
                            ToggleModal={ToggleModalSelectCategories}
                            isModalOpen={modalSelectCategoriesOpen}
                            sportName={sportSelected.value.sportName}
                        >
                            {
                                sportSelected.value.sportCategories ?
                                    <ModalSelectCategories.SportCategories
                                        sportCategories={sportSelected.value.sportCategories}
                                        sportCategorySelected={sportCategorySelected.value}
                                        updateSportCategorySelected={sportCategorySelected.Update}
                                    /> : null
                            }
                            {
                                sportSelected.value.genderCategories ?
                                    <ModalSelectCategories.GenderOptions
                                        genderCategorySelected={genderCategorySelected.value}
                                        updateGenderCategorySelected={genderCategorySelected.Update}
                                        genderCategories={sportSelected.value.genderCategories}
                                    /> : null
                            }
                            <ModalSelectCategories.SubmitButton
                                value='Prosseguir'
                                Submit={ToggleModalToConfigGame}
                            />
                        </ModalSelectCategories.Root>
                        <ModalToConfigGame
                            modalIsOpen={modalToConfigGame}
                            ToggleModal={ToggleModalToConfigGame}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

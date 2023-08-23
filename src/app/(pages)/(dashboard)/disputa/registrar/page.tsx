"use client"
import styled from "app/(pages)/(dashboard)/layout.module.scss"
import PageTitle from "components/atoms/pageTitle"

import styledPage from "./styled.module.scss"

import ModalToConfigGame from "./components/template/modalToConfigGame"

import { useState } from "react"
import { toast } from "react-toastify"
import { VerifyIfCategoriesSelected } from "./@core/utils/verifications/VerifyIfCategoriesSelected"
import VerifyIfCoursesAndSportsSelectedCorrectly from "./@core/utils/verifications/VerifyIfCoursesAndSportsSelectedCorrectly"
import ChooseDispute from "./components/template/chooseDispute"
import { ModalSelectCategoriesInserted } from "./components/template/modalSelectCategoriesInserted"


export default function Page() {

    const [modalSelectCategoriesOpen, setModalSelectCategories] = useState(false)
    const [modalToConfigGame, setModalToConfigGame] = useState(false)
 

    const ToggleModalSelectCategories = () => {
        try {
            VerifyIfCoursesAndSportsSelectedCorrectly();
            setModalSelectCategories(!modalSelectCategoriesOpen)
        } catch (error: any) {
            toast.error(error.message.toString());
        }
    }

    const ToggleModalToConfigGame = () => {
        try {
            VerifyIfCategoriesSelected();
            setModalToConfigGame(!modalToConfigGame)
        } catch (error: any) {
            toast.error(error.message.toString());
        }
    }

    return (
        <>
            <section
                className={styled["content-page"]}
                data-boxshadow_in_bg="true"
            >
                <PageTitle title='Registrar disputa' />
                <div className={`${styled["box-page"]} ${styledPage["page-diputa-registrar"]}`}>
                    <div className={styledPage["container"]}>
                        <ChooseDispute
                            Submit={() => ToggleModalSelectCategories()}
                        />
                        <ModalSelectCategoriesInserted
                            modalSelectCategories={modalSelectCategoriesOpen}
                            ToggleModalSelectCategories={ToggleModalSelectCategories}
                            ToggleModalToConfigGame={ToggleModalToConfigGame}
                        />

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
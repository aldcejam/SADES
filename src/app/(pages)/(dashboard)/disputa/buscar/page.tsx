"use client"
import './styled.scss';
import styled from "app/(pages)/(dashboard)/layout.module.scss";

import PageTitle from 'components/atoms/pageTitle';
import ListSports from './components/template/listSports';
import { DisputaBuscar_Logic } from "./page_logic";
import { ModalSelectCategories } from "components/templates/modals/modalSelectCategories"

export default function Page() {

    const {
        ToggleModal, isModalOpen, course,
        listSport, genderCategorySelected, sportCategorySelected,
        sportSelected, Submit

    } = DisputaBuscar_Logic()

    return (
        <>
            <section
                className={styled["content-page"]}
                data-boxshadow_in_bg="true"
            >
                <PageTitle title='Pesquisar por jogo' />
                <div className={`page-disputa-buscar box-page`}>
                    <div className="background" />
                    <div className='content'>
                        <ListSports
                            ToggleModal={ToggleModal}
                            course={course ? course : "não há equipe selecionado"}
                            UpdateSportSelected={sportSelected.Update}
                            listSports={listSport}
                        />
                        <ModalSelectCategories.Root
                            ToggleModal={ToggleModal}
                            isModalOpen={isModalOpen}
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
                                Submit={Submit()}
                            />
                        </ModalSelectCategories.Root>
                    </div>
                </div>
            </section>
        </>
    )
}

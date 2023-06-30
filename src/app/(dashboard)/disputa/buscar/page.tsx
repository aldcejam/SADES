"use client"
import './styled.scss';
import styled from "app/(dashboard)/layout.module.scss";

import PageTitle from 'components/atoms/pageTitle';
import ModalSelectCategories from "components/templates/modals/modalSelectCategories";
import ListSports from './components/template/listSports';
import { DisputaBuscar_Logic } from "./page_logic";
  
export default function Page() {

    const { Submit, ToggleModal, UpdateSports, course, isModalOpen, listSport } = DisputaBuscar_Logic()

    return (
        <>
            <PageTitle title='Pesquisar por jogo' />
            <section
                className={styled["content-page"]}
                data-boxshadow_in_bg="true"
            >
                <div className={`page-disputa-buscar  box-page`}>
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
                </div>
            </section>
        </>
    )
}

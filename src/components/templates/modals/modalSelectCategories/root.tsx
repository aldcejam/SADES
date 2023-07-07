"use client"
import styled from './styled.module.scss';

import CloseIcon from '@mui/icons-material/Close';

import ModalTemplate from '../modalTemplate'; 
import { ReactNode, memo } from 'react';

type ModalSelectCategoriesRootProps = {
    isModalOpen: boolean,
    ToggleModal: () => void
    sportName: string
    children: ReactNode
}

const ModalSelectCategoriesRoot = ({ isModalOpen, ToggleModal, children, sportName }: ModalSelectCategoriesRootProps) => {
    return ( 
        <ModalTemplate
            modalIsOpen={isModalOpen}
        >
            <div className={styled["modal-select-categories"]}>
                <CloseIcon onClick={() => ToggleModal()} className={styled['close-icon']} />
                <div className={styled["titles"]}>
                    <h4>Esporte: {sportName}</h4>
                    <h5>Selecione as categorias</h5>
                </div>
                {children}
            </div>
        </ModalTemplate>
    )
}

export default memo(ModalSelectCategoriesRoot)
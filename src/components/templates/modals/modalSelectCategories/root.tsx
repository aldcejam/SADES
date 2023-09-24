"use client"
import styled from './styled.module.scss'; 
import ModalTemplate from '../modalTemplate'; 
import { ReactNode, memo } from 'react'; 
type ModalSelectCategoriesRootProps = {
    modal:{
        state: boolean,
        Toggle: () => void
    }
    sportName: string
    children: ReactNode
}

const ModalSelectCategoriesRoot = ({ modal, children, sportName }: ModalSelectCategoriesRootProps) => {
    return ( 
        <ModalTemplate
            modal={modal} 
        >
            <div className={styled["modal-select-categories"]}> 
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
"use client"
import { StyledModalSelectCategories } from './styled';

import CloseIcon from '@mui/icons-material/Close';

import ModalTemplate from '../modalTemplate';
import SportCategories from '../../../organisms/modalSelectCaregories/sportCategories';
import GenderOptions from '../../../organisms/modalSelectCaregories/genderOptions';
import SubmitButton from 'src/components/atoms/submit';
import { ModalSelectCategoriesStatesConsumer } from 'src/@core-components/modalSelectCategories/connection/consumer';
import { memo } from 'react';

type ModalSelectCategoriesProps = {
    isModalOpen: boolean,
    ToggleModal: () => void
    SubmitModal: () => void
}

const ModalSelectCategories = ({ isModalOpen, ToggleModal, SubmitModal }: ModalSelectCategoriesProps) => {

    const { Submit, selectedSportData } = ModalSelectCategoriesStatesConsumer(SubmitModal)

    return (

        <ModalTemplate
            modalIsOpen={isModalOpen}
        >
            <StyledModalSelectCategories>
                <CloseIcon onClick={() => ToggleModal()} className='close-icon' />
                <div className="titles">
                    <h4>Esporte: {selectedSportData?.sportName}</h4>
                    <h5>Selecione as categorias</h5>
                </div>
                {selectedSportData?.sportCategories ?
                    <SportCategories />
                    : null
                }
                {selectedSportData?.genderCategories ?
                    <GenderOptions />
                    : null
                    
                }
                <SubmitButton
                    Submit={() => Submit()}
                    value="prosseguir"
                />
            </StyledModalSelectCategories>
        </ModalTemplate>
    )
}

export default memo(ModalSelectCategories )
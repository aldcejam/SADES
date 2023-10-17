import { Rajdhani } from '@next/font/google';
import styled from './styled.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import React, { memo } from 'react'; // Importando o 'memo' do React
import Modal from 'react-modal';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

type ModalTemplateProps = {
  modal: {
    state: boolean;
    Toggle: () => void;
  };
  children: React.ReactNode;
};

const ModalTemplate = ({ modal, children }: ModalTemplateProps) => {
  return (
    <Modal
      isOpen={modal.state}
      onRequestClose={() => modal.Toggle()}
      overlayClassName={styled['overlay']}
      className={styled['wrapper']}
      shouldCloseOnEsc={true}
    >
      <CloseIcon
        onClick={() => modal.Toggle()}
        className={styled['close-icon']}
      />
      {children}
    </Modal>
  );
};

export default ModalTemplate;

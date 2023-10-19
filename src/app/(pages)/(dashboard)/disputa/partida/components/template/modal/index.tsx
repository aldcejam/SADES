'use client';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';
import styled from './styled.module.scss';
import { motion } from 'framer-motion';
import ReactModal from 'react-modal';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);
 
  return (
    <ReactModal
      isOpen={true} 
      shouldCloseOnOverlayClick
      onRequestClose={() => onClick}
      overlayClassName={styled['overlay']}
      className={styled['wrapper']}
      shouldCloseOnEsc={true}
    > 
        <CloseIcon
          onClick={() => onDismiss()}
          className={styled['close-icon']}
        />
        {children} 
    </ReactModal>
  );
}

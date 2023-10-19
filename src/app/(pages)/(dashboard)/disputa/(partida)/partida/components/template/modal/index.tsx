'use client';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';
import styled from './styled.module.scss';
import { motion } from 'framer-motion';

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

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  };
  return (
    <motion.div
      ref={overlay}
      className={styled['overlay']}
      onClick={onClick}
      animate={show}
    >
      <div
        ref={wrapper}
        className={styled['wrapper']}
        onClick={stopPropagation}
      >
        <CloseIcon
          onClick={() => onDismiss()}
          className={styled['close-icon']}
        />
        {children}
      </div>
    </motion.div>
  );
}

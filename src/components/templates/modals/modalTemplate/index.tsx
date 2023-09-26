"use client"
import { motion } from "framer-motion";
import { Rajdhani } from '@next/font/google';
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from 'react-dom';
import styled from './styled.module.scss';
import CloseIcon from '@mui/icons-material/Close';

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
});

const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};

type ModalTemplateProps = {
    modal: {
        state: boolean,
        Toggle: () => void
    }
    children: React.ReactNode
}

const ModalTemplate = ({ modal, children }: ModalTemplateProps) => {

    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#modal-portal")
        setMounted(true)
    }, [])

    const closeModal = useCallback(() => {
        modal.Toggle()
    }, [modal])
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    
    return (
        (mounted && ref.current) ? createPortal(
            <motion.div
                id="modal"
                className={rajdhani.className}
                animate={modal.state ? show : hide}
                onClick={closeModal}
            >
                <div id={styled["wrapper"]} onClick={stopPropagation}>
                    <CloseIcon onClick={() => modal.Toggle()} className={styled['close-icon']} />
                    {children}
                </div>
            </motion.div>
            ,
            ref.current)
            : null
    )

}

export default ModalTemplate
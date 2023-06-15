"use client"
import { motion } from "framer-motion";
import { Rajdhani } from '@next/font/google';
import { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';


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
    modalIsOpen: boolean,
    children: React.ReactNode

}

const ModalTemplate = ({ modalIsOpen, children }: ModalTemplateProps) => {

    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#modal-portal")
        setMounted(true)
    }, [])


    return (
        (mounted && ref.current) ? ReactDOM.createPortal(
            <motion.div
                id="modal"
                className={rajdhani.className}
                animate={modalIsOpen ? show : hide}
            >
                {children}
            </motion.div>
            ,
            ref.current)
            : null
    )

}

export default ModalTemplate
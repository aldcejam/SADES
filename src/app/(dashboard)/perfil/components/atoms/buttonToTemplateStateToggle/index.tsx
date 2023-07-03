"use client"
import styled from "./styled.module.scss"
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type ButtonToTemplateStateToggleProps = {
    title: string;
    state: boolean;
    ToggleState: () => void
}
const ButtonToTemplateStateToggle = ({ ToggleState, state, title }: ButtonToTemplateStateToggleProps) => {
    return (
        <div className={styled["button-to-template-state-toggle"]}
            aria-labelledby="botão para abrir menu de alteração de informações do usuário"
            onClick={() => ToggleState()}
            data-isOpen={state}
        >
            <p className={styled["title"]}>
                {state ? "Fechar" : title}
            </p>
            <motion.div
                layout
                className={styled["small-button"]}>
                <ChevronRightIcon className={styled["angle-button-icon"]} />
            </motion.div>
        </div>
    )
}

export default ButtonToTemplateStateToggle
"use client"
import { StyledButtonToTemplateStateToggle } from "./styled"
import { motion } from "framer-motion";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type ButtonToTemplateStateToggleProps = {
    title: string;
    state: boolean;
    ToggleState: () => void
}
const ButtonToTemplateStateToggle = ({ ToggleState, state, title }: ButtonToTemplateStateToggleProps) => {
    return (
        <StyledButtonToTemplateStateToggle
            aria-labelledby="botão para abrir menu de alteração de informações do usuário"
            onClick={() => ToggleState()}
            data-isOpen={state}
        >
            <p className="title">
                {state ? "Fechar" : title}
            </p>
            <motion.div
                layout
                className="small-button">
                <ChevronRightIcon className="angle-button-icon" />
            </motion.div>
        </StyledButtonToTemplateStateToggle>
    )
}

export default ButtonToTemplateStateToggle
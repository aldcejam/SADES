"use client"
import styled from "./styled.module.scss"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from "contexts/ThemeContext";
import { motion } from "framer-motion";

const ButtonDarkMode = () => {

    const { theme, ToggleTheme } = useThemeContext()
 
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    return (
        <div
            className={styled["button-dark-mode"]}
            data-theme-selected={theme}
            onClick={() => ToggleTheme()}>
            <motion.div className={styled["handle"]} layout transition={spring} >
                {theme == "light" ?
                    <LightModeIcon className={styled["icon"]} />
                    :
                    <DarkModeOutlinedIcon className={styled["icon"]} />
                }
            </motion.div>
        </div>
    )

}
export default ButtonDarkMode
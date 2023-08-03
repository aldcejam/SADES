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
        <motion.div
            onClick={() => ToggleTheme()}
            className={styled["handle"]}
            layout
            transition={spring} >
            {theme == "light" ?
                <DarkModeOutlinedIcon className={styled["icon"]} />
                :
                <LightModeIcon className={styled["icon"]} />
            }
        </motion.div>
    )

}
export default ButtonDarkMode
"use client"
import { StylesButtonDarkMode } from "./styled"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from "contexts/ThemeContext";
import { motion } from "framer-motion";

const ButtonDarkMode = () => {

    const { themeName, themeModifier } = useThemeContext()

    const ToggleTheme = () => {
        themeModifier(themeName == 'light' ? 'dark' : 'light')
        localStorage.setItem('@ThemeSemadec', themeName == 'light' ? 'dark' : 'light')

    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    return (
        <StylesButtonDarkMode themeselected={themeName} onClick={() => ToggleTheme()}>
            <motion.div className="handle" layout transition={spring} >
                {themeName == "light" ?
                    <LightModeIcon className="icon" />
                    :
                    <DarkModeOutlinedIcon className="icon" />
                }
            </motion.div>
        </StylesButtonDarkMode>
    )

}
export default ButtonDarkMode
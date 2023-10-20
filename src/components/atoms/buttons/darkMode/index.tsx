'use client';
import styled from './styled.module.scss';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from 'contexts/ThemeContext';
import { motion } from 'framer-motion';

const ButtonDarkMode = () => {
  const { theme, ToggleTheme } = useThemeContext();

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <motion.button
      onClick={() => ToggleTheme()}
      className={styled['handle']}
      aria-label={`clique para mudar o tema para ${theme == "light"? "dark" : "light"}`} 
      layout
      transition={spring}
      
    >
      {theme == 'light' ? (
        <DarkModeOutlinedIcon className={styled['icon']} />
      ) : (
        <LightModeIcon className={styled['icon']} />
      )}
    </motion.button>
  );
};
export default ButtonDarkMode;

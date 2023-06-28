"use client"
import { ThemeProvider as ThemeProviderMaterialUI } from '@mui/material/styles'
import { DarkTheme, LightTheme } from "../themes"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import Cookies from 'js-cookie';
import { GetInitialTheme } from 'themes/GetInitialTheme';

interface ChildrenProps {
    children: ReactNode;
}
interface IThemeContext {
    theme: string
    ToggleTheme: () => void
    mainColor: string,
    secondaryColor: string
}



const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [theme, setTheme] = useState<string>(GetInitialTheme())
    const mainColor = '#c43a3a'
    const secondaryColor = '#f07e14'
    /* #5B6ABD */
    /* #2e84c1 */
    /* #e25252 */

    const ToggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
        Cookies.set('ThemeSemadec', theme == 'light' ? 'dark' : 'light')
    }
    
    const themeMUI = () => {
        const root = window.document.body
        if (theme === 'light') {
            root.classList.remove('dark')
            root.classList.add('light')
            return LightTheme(mainColor, secondaryColor)
        } else {
            root.classList.remove('light')
            root.classList.add('dark')
            return DarkTheme(mainColor, secondaryColor)
        } 
    }




    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme, mainColor, secondaryColor }}>
            <ThemeProviderMaterialUI theme={themeMUI}>
                {children}
            </ThemeProviderMaterialUI>
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}


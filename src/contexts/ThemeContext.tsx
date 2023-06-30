"use client"
import { ThemeProvider as ThemeProviderMaterialUI } from '@mui/material/styles'
import { DarkTheme, LightTheme } from "../themes"
import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";


interface ChildrenProps {
    children: ReactNode;
}
interface IThemeContext {
    theme: string
    ToggleTheme: () => void
    mainColor: string,
    secondaryColor: string
}

export const GetInitialTheme = () => {
    const storedPrefs = localStorage.getItem('@ThemeSemadec');
    if (typeof storedPrefs === 'string') {
        return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
        return 'dark';
    }

    return 'light';
};


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [theme, setTheme] = useState<string>(GetInitialTheme)
    const mainColor = '#c43a3a'
    const secondaryColor = '#f07e14'
    /* #5B6ABD */
    /* #2e84c1 */
    /* #e25252 */

    const root = useRef<HTMLDivElement>(null) 

    const ToggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
        localStorage.setItem('@ThemeSemadec', theme == 'light' ? 'dark' : 'light')

        const element = root.current
        if (element) {
            if (theme == 'light') {
                element.classList.remove('dark')
                element.classList.add('light')
            }
            else {
                element.classList.add('dark')
                element.classList.remove('light')
            }
        }

    }

    const themeMUI = useMemo(() => {
        if (theme === 'light') {
            return LightTheme(mainColor, secondaryColor)
        } else {
            return DarkTheme(mainColor, secondaryColor)
        }
    }, [theme])



    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme, mainColor, secondaryColor }}>
            <div id="theme" className={theme} ref={root}>
                <ThemeProviderMaterialUI theme={themeMUI}>
                    {children}
                </ThemeProviderMaterialUI>
            </div>
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}


"use client"
import { ThemeProvider as ThemeProviderMaterialUI } from '@mui/material/styles'
import { DarkTheme, LightTheme } from "../themes"
import { createContext, ReactNode, useContext, useMemo, useRef, useState } from "react";
import Cookies from 'js-cookie';

interface IThemeContext {
    theme: string
    ToggleTheme: () => void
    mainColor: string,
    secondaryColor: string
}
 

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ initialTheme, children }: { initialTheme: string, children: ReactNode }) => {
    const [theme, setTheme] = useState<string>(initialTheme)
    const mainColor = '#c43a3a'
    const secondaryColor = '#f07e14'
    /* #5B6ABD */
    /* #2e84c1 */
    /* #e25252 */

    const root = useRef<HTMLDivElement>(null)

    const ToggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
        Cookies.set('ThemeSemadec', theme == 'light' ? 'dark' : 'light')

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


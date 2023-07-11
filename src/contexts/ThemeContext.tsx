"use client"
import { createContext, ReactNode, useContext, useMemo, useRef, useState } from "react";
import Cookies from 'js-cookie';

interface IThemeContext {
    theme: "dark" | "light"
    ToggleTheme: () => void
}


const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ initialTheme, children }: { initialTheme: "dark" | "light", children: ReactNode }) => {
    const [theme, setTheme] = useState<"dark" | "light">(initialTheme)

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
    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            <div id="theme" className={theme} ref={root}>
                {children}
            </div>
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}


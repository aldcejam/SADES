import Cookies from "js-cookie";

export const GetInitialTheme = (): "light" | "dark" => {
    if (typeof window !== 'undefined') {
        const storedPrefs = Cookies.get('ThemeSemadec');
        if (typeof storedPrefs === 'string') {
            return storedPrefs as "light" | "dark";
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }
    return 'light';
};
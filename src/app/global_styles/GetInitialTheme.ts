import { cookies } from 'next/headers';  

export const GetInitialTheme = (): "light" | "dark" => {
    const themePrefs = cookies().get('ThemeSemadec');
    if (themePrefs) {
        return themePrefs.value as "light" | "dark";
    }

    return 'light';
};
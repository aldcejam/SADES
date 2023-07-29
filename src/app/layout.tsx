import React from 'react';
import "./globals.scss";

import { ClientSide } from './ClientSide';
import { Rajdhani } from '@next/font/google'
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { cookies } from 'next/headers';
import { SuapClient } from 'services/Login-Suap/SuapClient';


const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
});

export const GetInitialTheme = (): "light" | "dark" => {
    const themePrefs = cookies().get('ThemeSemadec');
    if (themePrefs) {
        return themePrefs.value as "light" | "dark";
    }

    return 'light';
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    SuapClient()

    return (
        <html lang='pt-br' className={`${rajdhani.className}`}>
            <head>
                <title>SADES</title>
            </head>
            <body>
                <ThemeContextProvider initialTheme={GetInitialTheme()}>
                    <ClientSide>
                        <div>
                            <div id="modal-portal" />
                        </div>
                        {children}
                    </ClientSide>
                </ThemeContextProvider>
            </body>
        </html >
    );
}

import React from 'react';
import "./globals.css";
import DefaultBackground from 'public/Default-background';

import { Modal } from 'components/templates/modals/modalTemplate/modal';
import { ClientSide } from './ClientSide';
import { Rajdhani } from '@next/font/google'
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { cookies } from 'next/headers';

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
});

export const GetInitialTheme = () => {
    const themePrefs = cookies().get('ThemeSemadec');
    if (themePrefs) {
        return themePrefs.value;
    }

    return 'light';
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={`${rajdhani.className}`}>
            <head>
                <title>SADES</title>
            </head>
            <body>
                <ThemeContextProvider initialTheme={GetInitialTheme()}>
                    <ClientSide>
                        <DefaultBackground />
                        <Modal children={<div id="modal-portal" />} />
                        {children}
                    </ClientSide>
                </ThemeContextProvider>
            </body>
        </html >
    );
}

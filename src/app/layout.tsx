import React from 'react';
import "./global_styles/globals.scss";

import { ClientSide } from './ClientSide';
import { Rajdhani } from '@next/font/google'

import { ThemeContextProvider as ProviderTheme } from 'contexts/ThemeContext';
import { GetInitialTheme } from './global_styles/GetInitialTheme';

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
});


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang='pt-br' className={`${rajdhani.className}`}>
            <head>
                <title>SADES</title>
            </head>
            <body>
                <ProviderTheme initialTheme={GetInitialTheme()}>
                    <ClientSide>
                        <div>
                            <div id="modal-portal" />
                        </div>
                        {children}
                    </ClientSide>
                </ProviderTheme>
            </body>
        </html >
    );
}

"use client"
import React from 'react';
import { Providers } from './providers';
import "./globals.css";
import DefaultBackground from 'public/Default-background';

import { Modal } from 'components/templates/modals/modalTemplate/modal';
import { ClientSide } from './ClientSide';
import { Rajdhani } from '@next/font/google'
import Cookies from 'js-cookie';

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ["300", "400", "500", "600", "700"],
});

const GetInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const storedPrefs = Cookies.get('ThemeSemadec');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
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
                <Providers>
                    <ClientSide />
                    <DefaultBackground />
                    <Modal children={<div id="modal-portal" />} />
                    {children}
                </Providers>
            </body>
        </html >
    );
}

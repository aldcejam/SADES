import React from 'react';
import { Providers } from './providers';
import "./globals.css"; 
import DefaultBackground from 'public/Default-background';

import { Modal } from 'components/templates/modals/modalTemplate/modal';
import { ClientComponents } from './ClientComponents';
import { Rajdhani } from '@next/font/google' 

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
        <html className={rajdhani.className}>
            <head>
                <title>SADES</title>
            </head>
            <body>
                <Providers>
                    <DefaultBackground />
                    <Modal children={<div id="modal-portal" />} />
                    <ClientComponents />
                    {children}
                </Providers>
            </body>
        </html >
    );
}

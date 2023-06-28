import React from 'react';
import { Providers } from './providers';
import "./globals.css";
import DefaultBackground from 'public/Default-background';

import { Modal } from 'components/templates/modals/modalTemplate/modal';
import { BodyClientSide } from './BodyClientSide';
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
        <html className={`${rajdhani.className}`}>
            <head>
                <title>SADES</title>
            </head>
            <BodyClientSide>
                <Providers>
                    <DefaultBackground />
                    <Modal children={<div id="modal-portal" />} />
                    {children}
                </Providers>
            </BodyClientSide>
        </html >
    );
}

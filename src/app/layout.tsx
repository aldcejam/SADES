import React from 'react';
import "./globals.scss"; 

import { ClientSide } from './ClientSide';
import { Rajdhani } from '@next/font/google'
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { cookies } from 'next/headers';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { client } from '@base-project/client-graphql';

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

    /*  client
         .query({
             query: gql`
             query { 
                 user(id:"e7825a3f-3eb2-4387-bf8d-f2bbc7e8cf92"){
                   username
                 }
               }
       `,
         })
         .then((result) => console.log(result.data.user.username)); */

    return (
        <html lang='pt-br' className={`${rajdhani.className}`}>
            <head>
                <title>SADES</title>
            </head>
            <body>
                <ThemeContextProvider initialTheme={GetInitialTheme()}>
                    <ClientSide>
                        <div children={<div id="modal-portal" />} />
                        {children}
                    </ClientSide>
                </ThemeContextProvider>
            </body>
        </html >
    );
}

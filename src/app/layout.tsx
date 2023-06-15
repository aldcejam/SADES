import React from 'react';
import { Providers } from './providers';
import "./layout-style/globals.css";
import DefaultBackground from 'public/Default-background';

import ContainerGlobal from './layout-style/ContainerGlobal';
import ContainerPage from './layout-style/ContainerPage';

import Sidebar from 'src/components/templates/sidebar';
import SettingsButtons from 'src/components/molecules/settingsButtons';
import { Modal } from 'src/components/templates/modals/modalTemplate/modal';
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
          {/* ------------------------------------ */}
          <ContainerGlobal>
            <Sidebar />
            <SettingsButtons />
            <ContainerPage>
              {children}
            </ContainerPage>
          </ContainerGlobal>
          {/* ------------------------------------ */}
        </Providers>
      </body>
    </html >
  );
}

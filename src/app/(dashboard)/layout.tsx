import React from 'react';
import ContainerGlobal from './layout-style/ContainerGlobal';
import ContainerPage from './layout-style/ContainerPage';

import Sidebar from 'components/templates/sidebar';
import SettingsButtons from 'components/molecules/settingsButtons'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContainerGlobal>
      <Sidebar />
      <SettingsButtons />
      <ContainerPage>
        {children}
      </ContainerPage>
    </ContainerGlobal>
  );
}

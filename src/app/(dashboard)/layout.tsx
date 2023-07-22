import React from 'react';
import styled from './layout.module.scss';
import Sidebar from 'components/templates/sidebar';
import SettingsButtons from 'components/molecules/settingsButtons';
import DefaultBackground from '@base-project/public/Default-background';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
    <DefaultBackground />
    <div className={styled["container-global"]}>
      <Sidebar />
      <SettingsButtons />
      <div className={styled["container-page"]}>
        {children}
      </div>
    </div>
  </>
  );
}

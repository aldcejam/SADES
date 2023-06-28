import React from 'react';
import styled from './layout.module.scss'; 
import Sidebar from 'components/templates/sidebar';
import SettingsButtons from 'components/molecules/settingsButtons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styled["container-global"]}>
      <Sidebar />
      <SettingsButtons />
      <div className={styled["container-page"]}>
        {children}
      </div>
    </div>
  );
}

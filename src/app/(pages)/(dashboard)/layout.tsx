import React from 'react';
import styled from './layout.module.scss';
import Sidebar from 'components/templates/sidebar';
import DefaultBackground from '@base-project/public/Default-background';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultBackground />
      <div className={styled['container-global']}>
        <Sidebar />
        <section
          className={styled['container-page']}
        >
          {children}
        </section> 
      </div>
    </>
  );
}

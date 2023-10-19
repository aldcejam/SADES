import PageTitle from 'components/atoms/pageTitle';
import styled from './layout.module.scss';
import { ReactNode } from 'react';

interface LayoutDashboardProps { 
  pageTitle?: string;
  children: ReactNode;
}

export const LayoutDashboard = ({ 
  pageTitle = undefined,
  children,
}: LayoutDashboardProps) => {
  return (
    <>
      {pageTitle && <PageTitle title={pageTitle} />}
      {children}
    </>
  );
};

import PageTitle from 'components/atoms/pageTitle';
import styled from './layout.module.scss';
import { ReactNode } from 'react';

interface LayoutDashboardProps {
  innerBoxShadow?: boolean;
  pageTitle?: string;
  children: ReactNode;
}

export const LayoutDashboard = ({
  innerBoxShadow = false,
  pageTitle = undefined,
  children,
}: LayoutDashboardProps) => {
  return (
    <section
      className={styled['content-page']}
      data-boxshadow_in_bg={innerBoxShadow}
    >
      {pageTitle && <PageTitle title={pageTitle} />}
      {children}
    </section>
  );
};

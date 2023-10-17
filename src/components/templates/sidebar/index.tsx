'use client';
import { useSidebarStateContext } from 'contexts/SidebarStateContext';
import MenuBurguer from 'components/atoms/menuBurguer';
import Navegation from 'components/organisms/sidebar/navegation';
import styled from './styled.module.scss';

const Sidebar = () => {
  const { sidebarState } = useSidebarStateContext();

  return (
    <div
      className={styled['sidebar']}
      data-sidebar-state={sidebarState.toString()}
    >
      <MenuBurguer />
      <Navegation />
    </div>
  );
};

export default Sidebar;

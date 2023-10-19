'use client';
import { useSidebarStateContext } from 'contexts/SidebarStateContext';
import styled from './styled.module.scss';

const MenuBurguer = () => {
  const { sidebarState, ToggleStateSidebar } = useSidebarStateContext();

  return (
    <button
      className={styled['menu-burguer']}
      data-menu-state={sidebarState.toString()}
      onClick={() => ToggleStateSidebar()}
    >
      <div className={styled['line']}></div>
    </button>
  );
};

export default MenuBurguer;

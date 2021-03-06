import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../helpers/context';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <Wrapper className={`${isSidebarOpen ? 'show-sidebar shadow' : ''}`}>
      <SidebarContent />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  transition: var(--burger-transition);
  transform: translateX(-100vw);
  position: absolute;
  top: 5.625rem;
  left: 0;
  right: 0;
  z-index: 999;
  overflow: auto;
  @media screen and (min-width: 992px) {
    display: none;
  }
  &.show-sidebar {
    transform: translateX(0);
  }
`;

export default Sidebar;

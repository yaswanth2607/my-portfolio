import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarTab = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
`;

export const TabContainer = styled.div<{spaceBetween: number}>`
  gap: ${(props)=>props.spaceBetween}px;
  margin: 16px;
  display: flex;
`;

export const TabLabel = styled(NavLink)`
  font-family: monospace;
  text-decoration: none;
  color: #2f2f2f;
  cursor: context-menu;
  &.active {
    border-bottom: 2px solid #8a8a8a;
  }
`;

export const StyledIcons = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
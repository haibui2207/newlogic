import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { PATHS } from 'src/paths';

const Header = () => {
  return (
    <Nav>
      <CustomLink to={PATHS.HOME} style={({ isActive }) => (isActive ? { color: '#333' } : undefined)}>
        Home
      </CustomLink>
      <CustomLink to={PATHS.CONSENTS} style={({ isActive }) => (isActive ? { color: '#333' } : undefined)}>
        Consents
      </CustomLink>
    </Nav>
  );
};
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const CustomLink = styled(NavLink)`
  color: #ddd;
  text-decoration: none;

  &:not(:first-of-type) {
    margin-left: 24px;
  }
`;

export default Header;

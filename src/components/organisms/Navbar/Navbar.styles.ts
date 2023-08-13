import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-width: 100%;
  margin: 0 auto;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavLinkItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const LogoImage = styled.img`
  width: 40px; 
  height: auto;
  margin-right: 10px;
`;

export const Spacer = styled.div`
  flex: 1;
`;
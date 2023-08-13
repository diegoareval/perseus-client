import { NavbarContainer, NavbarWrapper, Logo, NavLinks, NavLinkItem, NavLink, LogoImage, Spacer } from './Navbar.styles'
export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Logo href="/">
          <LogoImage src="https://perseusinc.com/wp-content/uploads/2023/02/PERSEUSX-HDR.png" alt="Logo" />
          PerseusX
        </Logo>
        <Spacer />
        <NavLinks>
          <NavLinkItem>
            <NavLink href="/">Home</NavLink>
          </NavLinkItem>
        </NavLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
};


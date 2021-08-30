import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
`;

const fadeInAnimation = css`
  animation: ${fadeIn} 0.3s ease both;
`;

const Wrapper = styled.nav`
  display: ${({ active }) => (active ? 'block' : 'none')};
  position: fixed;
  width: 90%;
  top: 10.5rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: flex;
    align-items: center;
    width: auto;
    position: static;
  }
`;

const NavList = styled.ul`
  margin-bottom: 2.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 0;
    margin-right: 4.8rem;
    display: flex;
    align-items: center;
    gap: 4.8rem;
  }
`;

const NavItem = styled.li`
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
  ${fadeInAnimation}
  animation-delay: ${({ delay }) => delay + 'ms'};

  &:first-child {
    border-top: 1px solid hsla(0, 0%, 100%, 0.15);
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    border: none;
    &:first-child {
      border: none;
    }
  }
`;

const NavLink = styled.a`
  display: block;
  padding: 2.5rem;
  font-size: 2rem;
  line-height: 1.7rem;
  letter-spacing: 0.23rem;
  color: hsl(0, 0%, 100%);
  text-transform: uppercase;
  transition: color 0.2s;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0;
    color: ${({ theme }) => theme.colorText};
    font-size: 1.3rem;
    line-height: 1.7rem;
    letter-spacing: 0.15rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colorSecondary};
  }
`;

const NavButton = styled(NavLink)`
  padding: 1.6rem 0 1.5rem;
  width: 100%;
  font-weight: 500;
  border: 2px solid hsl(0, 0%, 100%);
  background: transparent;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: color 0.2s, border 0.2s, background 0.2s;
  ${fadeInAnimation}
  animation-delay: ${({ delay }) => delay + 'ms'};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 1.2rem 3.2rem;
    color: hsl(0, 0%, 100%);
    background: ${({ theme }) => theme.colorSecondary};
    border: 2px solid transparent;
    box-shadow: 0 8px 8px -4px rgba(73, 93, 207, 0.20012);
  }

  &:hover {
    color: ${({ theme }) => theme.colorSecondary};
    border: 2px solid ${({ theme }) => theme.colorSecondary};
    background: transparent;
  }
`;

const Navigation = ({ active }) => {
  return (
    <Wrapper active={active}>
      <NavList>
        <NavItem delay="50">
          <NavLink href="#">Features</NavLink>
        </NavItem>
        <NavItem delay="100">
          <NavLink href="#">Pricing</NavLink>
        </NavItem>
        <NavItem delay="150">
          <NavLink href="#">Contact</NavLink>
        </NavItem>
      </NavList>
      <NavButton as="button" aria-label="Login Button" delay="200">
        Login
      </NavButton>
    </Wrapper>
  );
};

export default Navigation;

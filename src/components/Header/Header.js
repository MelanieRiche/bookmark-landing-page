import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import iconClose from '../../assets/icon-close.svg';
import iconHamburger from '../../assets/icon-hamburger.svg';
import { sharedWrapper } from '../../theme/GlobalStyle';
import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';
import Facebook from '../Svg/Icons/Facebook.js';
import Twitter from '../Svg/Icons/Twitter.js';

const Wrapper = styled.header`
  position: relative;
  padding: 4rem 0;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 4.8rem 0;
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  ${sharedWrapper}

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  ${({ active }) =>
    active &&
    css`
      position: fixed;
    `};
`;

const MenuToggleBtn = styled.button`
  display: block;
  margin: -1rem;
  padding: 2rem;
  width: 1.8rem;
  height: 1.5rem;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${({ active }) => active ? iconClose : iconHamburger});
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: none;
  } ;
`;

const MobileBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colorText};
  opacity: 0.95;
  z-index: 99;
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4rem;

  a {
    color: hsl(0, 0%, 100%);
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colorSecondary};
    }
  }
`;

const Header = () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const [activeMenu, setActiveMenu] = useState(false);
  const menuToggle = () => setActiveMenu(prev => !prev);

  useEffect(() => {
    const handler = () => setActiveMenu(false);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mediaQuery]);

  return (
    <Wrapper>
      <InnerWrapper active={activeMenu}>
        <a href="/" aria-label="Logo Bookmark">
          <Logo white={activeMenu} />
        </a>
        <MenuToggleBtn active={activeMenu} onClick={menuToggle} aria-label="Menu Toggle Button"/>
        <Navigation active={activeMenu} />
      </InnerWrapper>
      {activeMenu && (
        <MobileBackground>
          <SocialIcons>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
          </SocialIcons>
        </MobileBackground>
      )}
    </Wrapper>
  );
};

export default Header;

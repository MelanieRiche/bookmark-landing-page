import styled from 'styled-components';
import { sharedWrapper } from '../../theme/GlobalStyle';
import Logo from '../Logo/Logo.js';
import Facebook from '../Svg/Icons/Facebook.js';
import Twitter from '../Svg/Icons/Twitter.js';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colorText};
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  padding: 4rem 0 4.3rem;
  display: grid;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 3.2rem 0;
    display: flex;
    justify-content: space-between;
  } ;
`;

const Nav = styled.nav`
  padding: 3.9rem 0 4.8rem;
  display: grid;
  justify-items: center;
  gap: 3.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-left: 6.3rem;
    padding: 0;
    flex-grow: 1;
    display: flex;
    align-items: center;
  } ;
`;

const Link = styled.a`
  display: block;
  font-size: 1.5rem;
  line-height: 1.7rem;
  letter-spacing: 0.173rem;
  text-transform: uppercase;
  color: hsl(0, 0%, 100%);
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colorSecondary};
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
  } ;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  a {
    color: hsl(0, 0%, 100%);
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colorSecondary};
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo light />
        <Nav>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </Nav>
        <SocialIcons>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter />
          </a>
        </SocialIcons>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Footer;

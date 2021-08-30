import Button from '../Button/Button';
import styled from 'styled-components';
import Heading from '../Heading/Heading';
import illustration from '../../assets/illustration-hero.svg';
import { sharedInnerWrapper, sharedWrapper } from '../../theme/GlobalStyle';
import BlueBackground from '../Svg/BlueBackground';

const Wrapper = styled.section`
  padding-top: 4rem;
  margin-bottom: 14rem;
  position: relative;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-top: 6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    min-height: 54.6rem;
    margin-bottom: 8rem;
  } ;
`;

const StyledBackground = styled(BlueBackground)`
  position: absolute;
  display: block;
  height: 54vw;
  top: 9.2rem;
  left: 20vw;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 200rem;
    height: 35.2rem;
    top: 13rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    top: 19.4rem;
    left: 64vw;
  } ;
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    display: flex;
    gap: 3rem;
  } ;
`;

const Illustration = styled.img`
  order: 1;
  display: block;
  margin: 0 auto 6.9rem;
  width: 100%;
  max-width: 58rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: 0;
    width: auto;
    max-width: unset;
  } ;
`;

const Content = styled.div`
  ${sharedInnerWrapper}
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-top: 7rem;
    flex: 0 0 50%;
    text-align: left;
  } ;
`;

const Paragraph = styled.p`
  margin: 1.6rem 0 3.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 2.4rem 0 3.2rem;
  } ;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    justify-content: flex-start;
  } ;
`;

const StyledButton = styled(Button)`
  padding: 1rem 0;
  width: 100%;
  max-width: 16.6rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding: 1rem 2.4rem;
    max-width: unset;
    width: auto;
  } ;
`;

const Intro = () => {
  return (
    <Wrapper>
      <StyledBackground />
      <InnerWrapper>
        <Illustration src={illustration} alt="Intro illustration" />
        <Content>
          <Heading>A Simple Bookmark Manager</Heading>
          <Paragraph>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Paragraph>
          <ButtonsWrapper>
            <StyledButton>Get it on Chrome</StyledButton>
            <StyledButton secondary>Get it on Firefox</StyledButton>
          </ButtonsWrapper>
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Intro;

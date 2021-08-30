import styled from 'styled-components';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import bgDots from '../../../assets/bg-dots.svg';

const Wrapper = styled.li`
  padding: 4.9rem 2.4rem 2.4rem;
  display: grid;
  justify-items: center;
  text-align: center;
  background: hsl(0, 0%, 100%);
  box-shadow: 0 1rem 2rem -0.5rem rgba(73, 93, 207, 0.2);
  border-radius: 1.5rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    max-width: 28rem;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    &:nth-child(2) {
      margin-top: 3.2rem;
    }

    &:nth-child(3) {
      margin-top: 6.4rem;
    }
  }
`;

const Divider = styled.div`
  padding: 3.2rem 0 2.4rem;
  width: calc(100% + 4.8rem);
  height: 0.4rem;
  background: url(${bgDots}) repeat-x center;
`;

const BrowserLogo = styled.img`
  margin-bottom: 3.2rem;
  height: 10rem;
`;

const Paragraph = styled.p`
  margin-top: 0.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.5rem;
  } ;
`;

const Card = ({ logo, browser, minVersion }) => {
  return (
    <Wrapper>
      <BrowserLogo src={logo} alt={`${browser} logo`} />
      <Heading h4 as="h4">
        Add to {browser}
      </Heading>
      <Paragraph>Minimum version {minVersion}</Paragraph>
      <Divider />
      <Button w100>Add &amp; Install Extension</Button>
    </Wrapper>
  );
};

export default Card;

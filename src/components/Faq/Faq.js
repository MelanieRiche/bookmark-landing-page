import styled from 'styled-components';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Accordion from './Accordion/Accordion';
import { faq } from './data';
import { sharedInnerWrapper, sharedWrapper } from '../../theme/GlobalStyle';

const Wrapper = styled.section`
  ${sharedWrapper}
  ${sharedInnerWrapper}
  padding-bottom: 14.9rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding-bottom: 15rem;
  } ;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1.6rem;
  line-height: 3rem;
`;

const FaqList = styled.div`
  padding: 5.6rem 0 5.4rem;
`;

const Faq = () => {
  return (
    <Wrapper>
      <StyledHeading h2 as="h2">
        Frequently Asked Questions
      </StyledHeading>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <FaqList>
        {faq.map(({ id, title, content }) => (
          <Accordion key={id} title={title} content={content} />
        ))}
      </FaqList>
      <Button>More Info</Button>
    </Wrapper>
  );
};

export default Faq;

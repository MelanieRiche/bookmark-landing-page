import styled from 'styled-components';
import { sharedWrapper } from '../../theme/GlobalStyle';
import Heading from '../Heading/Heading';
import Form from './Form/Form';

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colorPrimary};
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}
  padding: 6rem 0 2.8rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 5.8rem 0 7.4rem;
    max-width: 44.2rem;
  } ;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 3.2rem;
  line-height: 2.8rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 2.4rem 0 3.6rem;
    line-height: 4rem;
  } ;
`;

const Subscribe = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Heading h6 light as="h6">
          35,000+ ALREADY JOINED
        </Heading>
        <StyledHeading h2 light as="h2">
          Stay up-to-date with what we’re doing
        </StyledHeading>
        <Form />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Subscribe;

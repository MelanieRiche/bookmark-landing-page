import styled from 'styled-components';
import Heading from '../Heading/Heading';
import CardList from './CardList/CardList';
import { sharedInnerWrapper, sharedWrapper } from '../../theme/GlobalStyle';

const Wrapper = styled.section`
  ${sharedWrapper}
  margin-bottom: 14rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 14.9rem;
  } ;
`;

const InnerWrapper = styled.div`
  ${sharedInnerWrapper}
`;

const Extensions = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Heading h2 as="h2">
          Download the extension
        </Heading>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </InnerWrapper>
      <CardList />
    </Wrapper>
  );
};

export default Extensions;

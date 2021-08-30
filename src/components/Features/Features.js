import styled from 'styled-components';
import Heading from '../Heading/Heading';
import Feature from './Feature/Feature';
import Tab from './Tab/Tab';
import { features } from './data';
import { rgba } from 'polished';
import { useState } from 'react';
import { sharedInnerWrapper, sharedWrapper } from '../../theme/GlobalStyle';

const Wrapper = styled.section`
  text-align: center;
  margin-bottom: 14rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 14.9rem;
  } ;
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}
  ${sharedInnerWrapper}
`;

const TabListWrapper = styled.div`
  ${sharedWrapper}

  margin-top: 4rem;
  margin-bottom: 7.2rem;
  border-top: 1px solid ${({ theme }) => rgba(theme.colorPrimary, 0.2)};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: flex;
    justify-content: center;
    border: none;
  } ;
`;

const Features = () => {
  const [featureIndex, setFeatureIndex] = useState(0);

  const tablist = features.map(({ title }, index) => (
    <Tab
      key={title}
      active={features[featureIndex].title === title}
      onClick={() => setFeatureIndex(index)}
    >
      {title}
    </Tab>
  ));

  const { illustration, heading, content } = features[featureIndex];

  return (
    <Wrapper>
      <InnerWrapper>
        <Heading h2 as="h2">
          Features
        </Heading>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </InnerWrapper>
      <TabListWrapper>{tablist}</TabListWrapper>
      <Feature
        illustration={illustration}
        heading={heading}
        content={content}
      />
    </Wrapper>
  );
};

export default Features;

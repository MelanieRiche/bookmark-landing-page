import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import Arrow from '../../Svg/Icons/Arrow';
import { useRef, useState } from 'react';

const Wrapper = styled.div`
  text-align: left;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    &:first-child {
      border-top: 1px solid ${({ theme }) => rgba(theme.colorText, 0.15)};
    }
  }
`;

const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 0 1.3rem;
  height: 6.3rem;
  width: 100%;
  background: transparent;
  border: none;
  flex-grow: 1;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.colorText};
  transition: color 0.2s;
  outline: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colorSecondary};
  }
`;

const StyledArrow = styled(Arrow)`
  transition: transform 0.2s;

  ${({ active }) =>
    active &&
    css`
      stroke: ${({ theme }) => theme.colorSecondary};
      transform: rotate(180deg);
    `}
`;

const Content = styled.div`
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colorText, 0.15)};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.13, 0.66, 0.36, 1);
`;

const Text = styled.p`
  padding: 1.3rem 0 2.8rem;
  font-size: 1.5rem;
  line-height: 3rem;
  letter-spacing: 0.014rem;
  color: ${({ theme }) => rgba(theme.colorText, 0.75)};
`;

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const accordionToggle = () => {
    setActive(prev => !prev);
    setContentHeight(active ? 0 : contentRef.current.scrollHeight);
  };

  return (
    <Wrapper>
      <AccordionButton onClick={accordionToggle}>
        {title}
        <StyledArrow active={active} />
      </AccordionButton>
      <Content ref={contentRef} style={{maxHeight: `${contentHeight}px`}}>
        <Text>{content}</Text>
      </Content>
    </Wrapper>
  );
};

export default Accordion;

import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const TabButton = styled.button`
  position: relative;

  padding: 2rem 0;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => rgba(theme.colorPrimary, 0.2)};
  background: transparent;
  font-size: 1.6rem;
  line-height: 1.7rem;
  letter-spacing: 0.053rem;
  font-weight: 400;
  color: ${({ theme }) => rgba(theme.colorText, 0.75)};
  transition: color 0.2s;
  outline: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 3.1rem 0;
    width: 24.3rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colorSecondary};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colorText};
      pointer-events: none;

      &::after {
        position: absolute;
        width: 14.3rem;
        height: 0.4rem;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.colorSecondary};
        content: '';

        @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
          width: 100%;
        }
      }
    `};
`;

const Tab = ({ active, children, ...props }) => {
  return (
    <TabButton active={active} {...props}>
      {children}
    </TabButton>
  );
};

export default Tab;

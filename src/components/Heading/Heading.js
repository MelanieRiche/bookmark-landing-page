import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.009rem;
  color: ${({ light, theme }) => (light ? 'hsl(0,0%,100%)' : theme.colorText)};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 4.8rem;
    line-height: 5.2rem;
    letter-spacing: -0.015rem;
  }

  ${({ h2 }) =>
    h2 &&
    css`
      font-size: 2.4rem;
      line-height: 5.2rem;
      letter-spacing: -0.007rem;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        margin-bottom: 1.6rem;
        font-size: 3.2rem;
        line-height: 5.2rem;
        letter-spacing: -0.01rem;
      } ;
    `};

  ${({ h4 }) =>
    h4 &&
    css`
      font-size: 2rem;
      line-height: 2.4rem;
      letter-spacing: 0.025rem;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 2rem;
        line-height: 2.4rem;
        letter-spacing: 0.025rem;
      }
    `};

  ${({ h6 }) =>
    h6 &&
    css`
      font-size: 1.2rem;
      line-height: 4rem;
      letter-spacing: 0.461rem;
      text-transform: uppercase;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 1.3rem;
        line-height: 4rem;
        letter-spacing: 0.5rem;
      } ;
    `};
`;

export default Heading;

import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset-advanced';
import { rgba } from 'polished';
import './font.css';

export const sharedWrapper = css`
  max-width: 111rem;
  width: 90%;
  margin: 0 auto;
`;

export const sharedInnerWrapper = css`
  margin: 0 auto;
  max-width: 54rem;
`;

const GlobalStyle = createGlobalStyle`
${reset}

html {
  font-size: 62.5%;
}

body {
  min-width: 30rem;
  font-family: 'Rubik', sans-serif;
  font-size: 1.8rem;
}

p {
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => rgba(theme.colorText, 0.5)};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  };
}
`;

export default GlobalStyle;

import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const Button = styled.button`
  padding: 0.8rem 2.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.8rem;
  letter-spacing: 0.025rem;
  color: hsl(0, 0%, 100%);
  border: 2px solid transparent;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colorPrimary};
  box-shadow: 0 0.8rem 0.8rem -0.4rem rgba(73, 93, 207, 0.2);
  cursor: pointer;
  transition: color 0.3s, border 0.3s, background 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colorPrimary};
    border: 2px solid ${({ theme }) => theme.colorPrimary};
    background: hsl(0, 0%, 100%);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background: hsl(0, 0%, 97%);
      color: ${({ theme }) => rgba(theme.colorText, 0.75)};

      &:hover {
        color: ${({ theme }) => rgba(theme.colorText, 0.75)};
        border: 2px solid ${({ theme }) => rgba(theme.colorText, 0.75)};
        background: hsl(0, 0%, 100%);
      }
    `};

  ${({ subscribe }) =>
    subscribe &&
    css`
      background: ${({ theme }) => theme.colorSecondary};
      color: hsl(0, 0%, 100%);

      &:hover {
        color: ${({ theme }) => theme.colorSecondary};
        border: 2px solid ${({ theme }) => theme.colorSecondary};
        background: hsl(0, 0%, 100%);
      }
    `};

  ${({ w100 }) =>
    w100 &&
    css`
      width: 100%;
    `};
`;

export default Button;

import styled, { css } from 'styled-components';
import Button from '../../Button/Button';
import { rgba } from 'polished';
import errorIcon from '../../../assets/icon-error.svg';

const Wrapper = styled.form`
  display: grid;
  gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: flex;
    align-items: flex-start;
  } ;
`;

const ErrorIcon = styled.img`
  position: absolute;
  top: 1.4rem;
  right: 1.6rem;
  opacity: 0;
  transition: opacity 0.3s;
`;

const InputWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colorSecondary};
  text-align: left;
  height: 4.8rem;
  overflow: hidden;
  transition: height 0.3s;

  input {
    padding: 0.8rem 6rem 0.8rem 1.8rem;
    width: 100%;
    font-family: inherit;
    font-size: 1.4rem;
    line-height: 2.8rem;
    letter-spacing: 0.025rem;
    color: ${({ theme }) => theme.colorText};
    border: 2px solid transparent;
    border-radius: 0.5rem;
    background: hsl(0, 0%, 100%);
    outline: none;
    transition: border 0.3s;

    &::placeholder {
      color: ${({ theme }) => rgba(theme.colorText, 0.25)};
    }

    @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
      width: 30rem;
    }
  }

  p {
    padding: 0.4rem 1.2rem 0.6rem;
    font-style: italic;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: 0.025rem;
    color: hsla(0, 0%, 100%);
  }

  ${({ error }) =>
    error &&
    css`
      height: 7rem;

      input {
        border: 2px solid ${({ theme }) => theme.colorSecondary};
      }

      ${ErrorIcon} {
        opacity: 1;
      }
    `};
`;

const FormTemplate = ({ error, onChange, onSubmit, value }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <InputWrapper error={error}>
        <input
          value={value}
          aria-label="Enter your email address"
          onChange={onChange}
          placeholder="Enter your email address"
        />
        <p>Whoops, make sure it’s an email</p>
        <ErrorIcon src={errorIcon} alt="error icon" />
      </InputWrapper>
      <Button type="submit" subscribe>
        Contact Us
      </Button>
    </Wrapper>
  );
};

export default FormTemplate;

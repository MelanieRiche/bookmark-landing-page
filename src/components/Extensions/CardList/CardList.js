import Card from '../Card/Card';
import styled from 'styled-components';
import logoChrome from '../../../assets/logo-chrome.svg';
import logoFirefox from '../../../assets/logo-firefox.svg';
import logoOpera from '../../../assets/logo-opera.svg';

const Wrapper = styled.ul`
  margin-top: 4rem;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0;
    margin-top: 4.8rem;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    gap: 3.4rem;
    align-items: flex-start;
  } ;
`;

const CardList = () => {
  const extensions = [
    {
      browser: 'Chrome',
      logo: logoChrome,
      minVersion: '62',
    },
    {
      browser: 'Firefox',
      logo: logoFirefox,
      minVersion: '55',
    },
    {
      browser: 'Opera',
      logo: logoOpera,
      minVersion: '46',
    },
  ];

  return (
    <Wrapper>
      {extensions.map(({ browser, logo, minVersion}) => (
        <Card
          key={browser}
          browser={browser}
          logo={logo}
          minVersion={minVersion}
        />
      ))}
    </Wrapper>
  );
};

export default CardList;

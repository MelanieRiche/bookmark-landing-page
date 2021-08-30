import { ThemeProvider } from 'styled-components';
import { theme } from './theme/mainTheme';
import GlobalStyles from './theme/GlobalStyle';
import Extensions from './components/Extensions/Extensions';
import Features from './components/Features/Features';
import Faq from './components/Faq/Faq';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import Subscribe from './components/Subscribe/Subscribe';
import Header from './components/Header/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Intro />
      <Features />
      <Extensions />
      <Faq />
      <Subscribe />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

import Router from 'routes';
import ThemeConfig from 'theme';
import GlobalStyles from 'theme/globalStyles';
import { ScrollToTop } from 'components/scroll';
import { BaseOptionChartStyle } from 'components/BaseOptionChart';

const App = () => {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
};

export default App;

import { ThemeProvider } from 'themes';

const Providers = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;

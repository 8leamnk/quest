import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import FONT_SIZE from './fontSize';

function Theme({ children }: Readonly<{ children: React.ReactNode }>) {
  const theme = {
    fontSize: FONT_SIZE,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;

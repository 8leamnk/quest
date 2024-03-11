import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import lightTheme from './lightTheme';
import FONT_SIZE from '../common/fontSize';

function Theme({ children }: Readonly<{ children: React.ReactNode }>) {
  const theme = useMemo(
    () => ({ colors: lightTheme, fontSize: FONT_SIZE }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;

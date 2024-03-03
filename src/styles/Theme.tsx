import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import COLORS from './colors';
import FONT_SIZE from './fontSize';

function Theme({ children }: Readonly<{ children: React.ReactNode }>) {
  const theme = useMemo(() => ({ colors: COLORS, fontSize: FONT_SIZE }), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
